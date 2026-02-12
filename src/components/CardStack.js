import { animate } from 'motion'

export class CardStack {
  constructor(container, options = {}) {
    this.container = container
    this.options = options
    this.numCards = options.numCards || 8
    this.duration = options.duration || 1.2
    this.stepDelay = options.stepDelay || 0.1
    this.autoFlipInterval = options.autoFlipInterval || 15000
    this.cardImages = options.cardImages || []
    this.backImage = options.backImage || '/card/back.webp'

    // การตั้งค่า animation สำหรับการลอยตัวของการ์ด
    this.floatDuration = options.floatDuration || { min: 3.5, max: 5.5 }
    this.floatDelay = options.floatDelay || { min: 0, max: 0.8 }
    this.floatY = options.floatY || { min: 4, max: 10 }
    this.floatTilt = options.floatTilt || { min: 0.3, max: 1 }

    // การตั้งค่าการแสดงผลและการออกแบบ
    this.cardWidth = options.cardWidth || 'min(90vw, 400px)'
    this.cardAspectRatio = options.cardAspectRatio || '400 / 588'
    this.cardOverlap = options.cardOverlap || '70px'
    this.cardBorderRadius = options.cardBorderRadius || '16px'

    // Behavior options
    this.enableAutoFlip = options.enableAutoFlip !== false
    this.enableHoverFlip = options.enableHoverFlip !== false
    this.enableFloatAnimation = options.enableFloatAnimation !== false
    this.enableGlossEffect = options.enableGlossEffect !== false
    this.enableFireflyMotion = options.enableFireflyMotion !== false
    // Toggle Spark Border (Magic Trail) on hover
    this.enableSparkBorder = options.enableSparkBorder !== false
    // Stars (off by default to avoid lag)
    this.enableStars = options.enableStars === true
    // Stars customization
    this.numStars = typeof options.numStars === 'number' ? options.numStars : 40
    this.yellowStarProbability =
      typeof options.yellowStarProbability === 'number' ? options.yellowStarProbability : 0.25
    this.starSizeRange = options.starSizeRange || { min: 2, max: 8 }
    this.starDelayRange = options.starDelayRange || { min: 0, max: 1.6 }
    this.hoverMode = options.hoverMode || 'individual' // 'individual', 'group', 'triple', หรือ 'spread'

    // ตัวเลือกสำหรับการขยายขนาดเมื่อ hover
    this.enableHoverScale = options.enableHoverScale !== false // เปิด/ปิดการขยายขนาดเมื่อ hover
    this.hoverScaleAmount = options.hoverScaleAmount || 1.1 // ปริมาณการขยายขนาด (1.1 = ขยาย 10%)
    this.hoverScaleDuration = options.hoverScaleDuration || 0.2 // ความเร็วของการขยายขนาด

    // การตั้งค่า easing functions สำหรับ animation
    this.flipEasing = options.flipEasing || 'ease-out'
    this.floatEasing = options.floatEasing || 'ease-in-out'

    // ตัวแปรสำหรับเก็บข้อมูลการ์ดและ animation
    this.cards = []
    this.inners = []
    this.runningAnims = []
    this.autoFlipIntervalId = null

    // เพิ่มตัวแปรสำหรับติดตาม hover state
    this.isHovering = false
    this.hoverTimeoutId = null

    // ตัวแปรสำหรับการขยายขนาด
    this.hoverScaleAnimations = [] // เก็บ animation ของการขยายขนาด
    this.fireflyAnimations = [] // เก็บ animation ของดาวที่ลอยเหมือนหิงห้อยต่อการ์ด
    this.floatAnimations = [] // เก็บ animation ลอยของการ์ด

    this.init()
  }

  // เริ่มต้นการทำงานของ component
  init() {
    // เคารพระบบ prefers-reduced-motion ถ้าไม่ได้กำหนดค่าไว้ชัดเจน
    try {
      const mql = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)')
      if (mql && mql.matches) {
        if (this.enableFloatAnimation === true && typeof this.options?.enableFloatAnimation === 'undefined') {
          this.enableFloatAnimation = false
        }
        if (typeof this.options?.enableFireflyMotion === 'undefined') {
          this.enableFireflyMotion = false
        }
      }
    } catch {}

    this.render()
    this.setupCards()
    this.setupAnimations()
    this.setupEventListeners()
    this.setupVisibilityHandling()
    // ไม่เริ่มหิงห้อยลอยจนกว่าจะ hover เพื่อประสิทธิภาพ
    if (this.enableAutoFlip) {
      this.startAutoFlip()
    }
  }

  // ขยายขนาดการ์ดเมื่อ hover
  scaleCardOnHover(cardIndex) {
    if (!this.enableHoverScale || cardIndex < 0 || cardIndex >= this.cards.length) return

    const cardElement = this.cards[cardIndex]

    // หยุด animation เดิมถ้ามี
    if (this.hoverScaleAnimations[cardIndex]) {
      this.hoverScaleAnimations[cardIndex].cancel()
    }

    // ขยายขนาดการ์ด
    const anim = animate(
      cardElement,
      {
        scale: this.hoverScaleAmount,
        zIndex: this.cards.length + 10, // ยก z-index ให้อยู่ด้านบน
      },
      {
        duration: this.hoverScaleDuration,
        easing: 'ease-out',
      }
    )

    this.hoverScaleAnimations[cardIndex] = anim
  }

  // รีเซ็ตขนาดการ์ดเมื่อเลิก hover
  resetCardScale(cardIndex) {
    if (!this.enableHoverScale || cardIndex < 0 || cardIndex >= this.cards.length) return

    const cardElement = this.cards[cardIndex]

    // หยุด animation เดิมถ้ามี
    if (this.hoverScaleAnimations[cardIndex]) {
      this.hoverScaleAnimations[cardIndex].cancel()
    }

    // รีเซ็ตขนาดการ์ด
    const anim = animate(
      cardElement,
      {
        scale: 1,
        zIndex: cardIndex + 2, // คืนค่า z-index เป็นปกติ
      },
      {
        duration: this.hoverScaleDuration,
        easing: 'ease-out',
      }
    )

    this.hoverScaleAnimations[cardIndex] = anim
  }

  // สร้าง HTML สำหรับการ์ดทั้งหมด
  render() {
    const renderCard = (index) => {
      // ใช้รูปภาพที่ส่งเข้ามา หรือใช้รูปเริ่มต้นถ้าไม่มี
      const frontImage = this.cardImages[index] || `/img/card/front/0-THE-FOOL.png`
      const backImage = this.backImage

      const rand = (min, max) => Math.random() * (max - min) + min
      const starsHTML = this.enableStars
        ? Array.from({ length: this.numStars }, () => {
            const size = Math.round(rand(this.starSizeRange.min, this.starSizeRange.max))
            const top = rand(0, 100)
            const left = rand(0, 100)
            const delay = rand(this.starDelayRange.min, this.starDelayRange.max)
            const isYellow = Math.random() < this.yellowStarProbability
            const cls = `star${isYellow ? ' star--yellow' : ''}`
            return `<div class="${cls}" style="top:${top}%;left:${left}%;width:${size}px;height:${size}px;animation-delay:${delay}s;"></div>`
          }).join('')
        : ''

      return `
        <div class="card-3d" id="card3d-${index}" style="width: ${this.cardWidth}; aspect-ratio: ${
        this.cardAspectRatio
      }; border-radius: 16px;">
          <div class="card-3d-inner" id="cardInner-${index}" style="border-radius: 16px;">
            <div class="card-face front" style="border-radius: 16px;">
              <div class="face-clip">
                <img src="${frontImage}" alt="Card front ${index + 1}" draggable="false" loading="lazy" decoding="async" />
                ${starsHTML ? `<div class="card-stars">${starsHTML}</div>` : ''}
              </div>
            </div>
            <div class="card-face back" style="border-radius: 16px;">
              <img src="${backImage}" alt="Card back ${index + 1}" draggable="false" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      `
    }

    // สร้าง HTML สำหรับ stack ของการ์ดทั้งหมด
    const sparkBorderClass = this.enableSparkBorder ? ' spark-border-enabled' : ''
    this.container.innerHTML = `
      <div class="card-wrapper">
        <div class="cards-stack${sparkBorderClass}" id="cardsStack" style="--overlap: ${this.cardOverlap};">
          ${Array.from({ length: this.numCards }, (_, i) => renderCard(i)).join('')}
        </div>
      </div>
    `
  }

  // ตั้งค่าการ์ดและ z-index
  setupCards() {
    this.cards = Array.from(this.container.querySelectorAll('.card-3d'))
    this.inners = this.cards.map((c) => c.querySelector('.card-3d-inner'))

    // จัดลำดับ z-index และตั้งค่าสถานะเริ่มต้น (หันหลัง)
    this.cards.forEach((cardEl, idx) => {
      cardEl.style.zIndex = String(idx + 2)
    })
    this.inners.forEach((innerEl) => {
      innerEl.style.transform = 'rotateY(180deg)'
    })
  }

  // ตั้งค่า animation การลอยตัวของแต่ละการ์ด
  setupAnimations() {
    if (!this.enableFloatAnimation) return

    // สร้าง animation การลอยตัวแบบต่อเนื่องสำหรับแต่ละการ์ด
    const rand = (min, max) => Math.random() * (max - min) + min
    this.cards.forEach((cardEl, index) => {
      const floatDuration = rand(this.floatDuration.min, this.floatDuration.max)
      const floatDelay = rand(this.floatDelay.min, this.floatDelay.max)
      const floatY = rand(this.floatY.min, this.floatY.max)
      const floatTilt = rand(this.floatTilt.min, this.floatTilt.max)
      const anim = animate(
        cardEl,
        { y: [0, -floatY, 0], rotateZ: [-floatTilt, floatTilt, -floatTilt] },
        { duration: floatDuration, delay: floatDelay, easing: this.floatEasing, repeat: Infinity }
      )
      this.floatAnimations[index] = anim
    })
  }

  // ตั้งค่า event listeners สำหรับการ hover
  setupEventListeners() {
    if (!this.enableHoverFlip) return

    if (this.hoverMode === 'individual') {
      // เพิ่ม event listeners สำหรับแต่ละการ์ด (ทีละใบ)
      this.cards.forEach((cardEl, index) => {
        cardEl.addEventListener('mouseenter', () => {
          this.handleCardMouseEnter(index)
        })

        cardEl.addEventListener('mouseleave', () => {
          this.handleCardMouseLeave(index)
        })
      })
    } else if (this.hoverMode === 'group') {
      // เพิ่ม event listeners สำหรับทั้ง stack (แบบกลุ่ม)
      const stack = this.container.querySelector('#cardsStack')

      stack.addEventListener('mouseenter', () => {
        this.handleGroupMouseEnter()
      })

      stack.addEventListener('mouseleave', () => {
        this.handleGroupMouseLeave()
      })
    } else if (this.hoverMode === 'triple') {
      // เพิ่ม event listeners สำหรับการ์ดแต่ละใบ (แบบ triple - 3 ใบพร้อมกัน)
      this.cards.forEach((cardEl, index) => {
        cardEl.addEventListener('mouseenter', () => {
          this.handleTripleCardMouseEnter(index)
        })

        cardEl.addEventListener('mouseleave', () => {
          this.handleTripleCardMouseLeave(index)
        })
      })
    } else if (this.hoverMode === 'spread') {
      // เพิ่ม event listeners สำหรับการ์ดแต่ละใบ (แบบ spread - การ์ดที่เหลือกระจายออกไปไกล)
      this.cards.forEach((cardEl, index) => {
        cardEl.addEventListener('mouseenter', () => {
          this.handleSpreadCardMouseEnter(index)
        })

        cardEl.addEventListener('mouseleave', () => {
          this.handleSpreadCardMouseLeave(index)
        })
      })
    }
  }

  // จัดการเมื่อ mouse เข้าไปในการ์ดเฉพาะใบ
  handleCardMouseEnter(cardIndex) {
    // ตั้งค่า hover state
    this.isHovering = true

    // ล้าง hover timeout ถ้ามี
    if (this.hoverTimeoutId) {
      clearTimeout(this.hoverTimeoutId)
      this.hoverTimeoutId = null
    }

    // หยุด auto flip ถ้าเปิดอยู่
    if (this.enableAutoFlip) {
      this.stopAutoFlip()
    }

    // ขยายขนาดการ์ด
    this.scaleCardOnHover(cardIndex)

    // พลิกเฉพาะการ์ดที่ hover
    this.flipCardToFront(cardIndex)

    // เริ่มการลอยของดาวสำหรับการ์ดนี้
    if (this.enableFireflyMotion) {
      this.startFirefliesForCard(cardIndex)
    }
  }

  // จัดการเมื่อ mouse ออกจากการ์ดเฉพาะใบ
  handleCardMouseLeave(cardIndex) {
    // ตั้งค่า hover state
    this.isHovering = false

    // รีเซ็ตขนาดการ์ด
    this.resetCardScale(cardIndex)

    // พลิกกลับเฉพาะการ์ดที่ hover ทันที
    this.flipCardToBack(cardIndex)

    // หยุดการลอยของดาวสำหรับการ์ดนี้
    if (this.enableFireflyMotion) {
      this.stopFirefliesForCard(cardIndex)
    }

    // เริ่ม auto flip ใหม่ถ้าเปิดอยู่และไม่ได้ hover อยู่
    if (this.enableAutoFlip && !this.isHovering) {
      // ใช้ timeout เพื่อให้แน่ใจว่าไม่ได้ hover อยู่จริงๆ
      this.hoverTimeoutId = setTimeout(() => {
        if (!this.isHovering) {
          this.startAutoFlip()
        }
      }, 500) // รอ 500ms เพื่อให้แน่ใจว่าไม่ได้ hover อยู่
    }
  }

  // จัดการเมื่อ mouse เข้าไปในการ์ดแบบ triple (3 ใบพร้อมกัน)
  handleTripleCardMouseEnter(cardIndex) {
    // ตั้งค่า hover state
    this.isHovering = true

    // ล้าง hover timeout ถ้ามี
    if (this.hoverTimeoutId) {
      clearTimeout(this.hoverTimeoutId)
      this.hoverTimeoutId = null
    }

    // หยุด auto flip ถ้าเปิดอยู่
    if (this.enableAutoFlip) {
      this.stopAutoFlip()
    }

    // ขยายขนาด 3 ใบ
    const cardsToScale = this.getTripleCards(cardIndex)
    cardsToScale.forEach((index) => {
      this.scaleCardOnHover(index)
    })

    // พลิก 3 ใบพร้อมกัน (ใบที่ hover และใบซ้ายขวา)
    this.flipTripleCardsToFront(cardIndex)

    // เริ่มการลอยของดาวสำหรับ 3 ใบ
    if (this.enableFireflyMotion) {
      this.getTripleCards(cardIndex).forEach((idx) => this.startFirefliesForCard(idx))
    }
  }

  // จัดการเมื่อ mouse ออกจากการ์ดแบบ triple (3 ใบพร้อมกัน)
  handleTripleCardMouseLeave(cardIndex) {
    // ตั้งค่า hover state
    this.isHovering = false

    // รีเซ็ตขนาด 3 ใบ
    const cardsToReset = this.getTripleCards(cardIndex)
    cardsToReset.forEach((index) => {
      this.resetCardScale(index)
    })

    // พลิกกลับ 3 ใบพร้อมกัน
    this.flipTripleCardsToBack(cardIndex)

    // หยุดการลอยของดาวสำหรับ 3 ใบ
    if (this.enableFireflyMotion) {
      this.getTripleCards(cardIndex).forEach((idx) => this.stopFirefliesForCard(idx))
    }

    // เริ่ม auto flip ใหม่ถ้าเปิดอยู่และไม่ได้ hover อยู่
    if (this.enableAutoFlip && !this.isHovering) {
      this.hoverTimeoutId = setTimeout(() => {
        if (!this.isHovering) {
          this.startAutoFlip()
        }
      }, 500)
    }
  }

  // จัดการเมื่อ mouse เข้าไปในการ์ดแบบ spread (การ์ดที่เหลือกระจายออกไปไกล)
  handleSpreadCardMouseEnter(cardIndex) {
    // ตั้งค่า hover state
    this.isHovering = true

    // ล้าง hover timeout ถ้ามี
    if (this.hoverTimeoutId) {
      clearTimeout(this.hoverTimeoutId)
      this.hoverTimeoutId = null
    }

    // หยุด auto flip ถ้าเปิดอยู่
    if (this.enableAutoFlip) {
      this.stopAutoFlip()
    }

    // ขยายขนาดการ์ดที่ hover
    this.scaleCardOnHover(cardIndex)

    // พลิกเฉพาะการ์ดที่ hover
    this.flipCardToFront(cardIndex)

    // ทำให้การ์ดอื่นกระจายออกไปและการ์ดที่ hover ใหญ่ขึ้น
    this.spreadCards(cardIndex)

    // เริ่มการลอยของดาวสำหรับการ์ดนี้
    if (this.enableFireflyMotion) {
      this.startFirefliesForCard(cardIndex)
    }
  }

  // จัดการเมื่อ mouse ออกจากการ์ดแบบ spread
  handleSpreadCardMouseLeave(cardIndex) {
    // ตั้งค่า hover state
    this.isHovering = false

    // รีเซ็ตขนาดการ์ด
    this.resetCardScale(cardIndex)

    // พลิกกลับการ์ดที่ hover
    this.flipCardToBack(cardIndex)

    // คืนตำแหน่งการ์ดทั้งหมดกลับเป็นปกติ
    this.resetCardPositions()

    // หยุดการลอยของดาวสำหรับการ์ดนี้
    if (this.enableFireflyMotion) {
      this.stopFirefliesForCard(cardIndex)
    }

    // เริ่ม auto flip ใหม่ถ้าเปิดอยู่และไม่ได้ hover อยู่
    if (this.enableAutoFlip && !this.isHovering) {
      this.hoverTimeoutId = setTimeout(() => {
        if (!this.isHovering) {
          this.startAutoFlip()
        }
      }, 500)
    }
  }

  // จัดการเมื่อ mouse เข้าไปใน stack (แบบกลุ่ม)
  handleGroupMouseEnter() {
    this.isHovering = true

    if (this.hoverTimeoutId) {
      clearTimeout(this.hoverTimeoutId)
      this.hoverTimeoutId = null
    }

    if (this.enableAutoFlip) {
      this.stopAutoFlip()
    }

    // ขยายขนาดทุกการ์ด
    this.cards.forEach((_, index) => {
      this.scaleCardOnHover(index)
    })

    // พลิกทุกการ์ดไปด้านหน้า
    this.flipAllCardsToFront()

    // เริ่มหิงห้อยสำหรับทุกการ์ด
    if (this.enableFireflyMotion) {
      this.cards.forEach((_, index) => this.startFirefliesForCard(index))
    }
  }

  // จัดการเมื่อ mouse ออกจาก stack (แบบกลุ่ม)
  handleGroupMouseLeave() {
    this.isHovering = false

    // รีเซ็ตขนาดทุกการ์ด
    this.cards.forEach((_, index) => {
      this.resetCardScale(index)
    })

    // พลิกทุกการ์ดกลับไปด้านหลัง
    this.flipAllCardsToBack()

    // หยุดหิงห้อยสำหรับทุกการ์ด
    if (this.enableFireflyMotion) {
      this.cards.forEach((_, index) => this.stopFirefliesForCard(index))
    }

    // เริ่ม auto flip ใหม่ถ้าเปิดอยู่และไม่ได้ hover อยู่
    if (this.enableAutoFlip && !this.isHovering) {
      this.hoverTimeoutId = setTimeout(() => {
        if (!this.isHovering) {
          this.startAutoFlip()
        }
      }, this.duration * 1000 + this.inners.length * this.stepDelay * 1000)
    }
  }

  // พลิกการ์ดเฉพาะใบไปด้านหน้า
  flipCardToFront(cardIndex) {
    // ยกเลิก animation ของการ์ดใบนี้ถ้ากำลังทำงานอยู่
    this.cancelCardAnimation(cardIndex)

    // ตรวจสอบว่าการ์ดใบนี้ไม่ได้พลิกอยู่แล้ว
    const currentRotation = this.inners[cardIndex].style.transform
    if (currentRotation && currentRotation.includes('rotateY(0deg)')) {
      return // การ์ดพลิกอยู่แล้ว
    }

    // พลิกเฉพาะการ์ดที่เลือก
    const anim = animate(
      this.inners[cardIndex],
      { rotateY: 0 },
      {
        duration: this.duration,
        easing: this.flipEasing,
        composite: 'replace',
      }
    )
    this.runningAnims.push(anim)
  }

  // พลิกการ์ดเฉพาะใบกลับไปด้านหลัง
  flipCardToBack(cardIndex) {
    // ยกเลิก animation ของการ์ดใบนี้ถ้ากำลังทำงานอยู่
    this.cancelCardAnimation(cardIndex)

    // ตรวจสอบว่าการ์ดใบนี้ไม่ได้พลิกกลับอยู่แล้ว
    const currentRotation = this.inners[cardIndex].style.transform
    if (currentRotation && currentRotation.includes('rotateY(180deg)')) {
      return // การ์ดพลิกกลับอยู่แล้ว
    }

    // พลิกกลับเฉพาะการ์ดที่เลือก
    const anim = animate(
      this.inners[cardIndex],
      { rotateY: 180 },
      {
        duration: this.duration,
        easing: this.flipEasing,
        composite: 'replace',
      }
    )
    this.runningAnims.push(anim)
  }

  // พลิก 3 ใบพร้อมกันไปด้านหน้า (ใบที่ hover และใบซ้ายขวา)
  flipTripleCardsToFront(cardIndex) {
    // หยุด animation ของการ์ดทั้ง 3 ใบถ้ากำลังทำงานอยู่
    this.cancelTripleCardAnimations(cardIndex)

    // กำหนดการ์ดที่จะพลิก (ใบที่ hover และใบซ้ายขวา)
    const cardsToFlip = this.getTripleCards(cardIndex)

    // พลิกการ์ดทั้ง 3 ใบพร้อมกัน
    cardsToFlip.forEach((index) => {
      if (index >= 0 && index < this.inners.length) {
        // ตรวจสอบว่าการ์ดใบนี้ไม่ได้พลิกอยู่แล้ว
        const currentRotation = this.inners[index].style.transform
        if (!currentRotation || !currentRotation.includes('rotateY(0deg)')) {
          const anim = animate(
            this.inners[index],
            { rotateY: 0 },
            {
              duration: this.duration,
              easing: this.flipEasing,
              composite: 'replace',
            }
          )
          this.runningAnims.push(anim)
        }
      }
    })
  }

  // พลิก 3 ใบพร้อมกันกลับไปด้านหลัง (ใบที่ hover และใบซ้ายขวา)
  flipTripleCardsToBack(cardIndex) {
    // หยุด animation ของการ์ดทั้ง 3 ใบถ้ากำลังทำงานอยู่
    this.cancelTripleCardAnimations(cardIndex)

    // กำหนดการ์ดที่จะพลิกกลับ (ใบที่ hover และใบซ้ายขวา)
    const cardsToFlip = this.getTripleCards(cardIndex)

    // พลิกกลับการ์ดทั้ง 3 ใบพร้อมกัน
    cardsToFlip.forEach((index) => {
      if (index >= 0 && index < this.inners.length) {
        // ตรวจสอบว่าการ์ดใบนี้ไม่ได้พลิกกลับอยู่แล้ว
        const currentRotation = this.inners[index].style.transform
        if (!currentRotation || !currentRotation.includes('rotateY(180deg)')) {
          const anim = animate(
            this.inners[index],
            { rotateY: 180 },
            {
              duration: this.duration,
              easing: this.flipEasing,
              composite: 'replace',
            }
          )
          this.runningAnims.push(anim)
        }
      }
    })
  }

  // พลิกทุกการ์ดไปด้านหน้า
  flipAllCardsToFront() {
    this.cancelAll()

    // พลิกการ์ดจากขวาไปซ้าย (การ์ดสุดท้ายไปการ์ดแรก)
    for (let i = this.inners.length - 1; i >= 0; i -= 1) {
      const delay = (this.inners.length - 1 - i) * this.stepDelay
      const anim = animate(
        this.inners[i],
        { rotateY: 0 },
        {
          duration: this.duration,
          easing: this.flipEasing,
          delay,
          composite: 'replace',
        }
      )
      this.runningAnims.push(anim)
    }
  }

  // พลิกทุกการ์ดกลับไปด้านหลัง
  flipAllCardsToBack() {
    this.cancelAll()

    // พลิกการ์ดจากซ้ายไปขวา (การ์ดแรกไปการ์ดสุดท้าย)
    for (let i = 0; i < this.inners.length; i += 1) {
      const delay = i * this.stepDelay
      const anim = animate(
        this.inners[i],
        { rotateY: 180 },
        {
          duration: this.duration,
          easing: this.flipEasing,
          delay,
          composite: 'replace',
        }
      )
      this.runningAnims.push(anim)
    }
  }

  // หยุด animation ของการ์ด 3 ใบ
  cancelTripleCardAnimations(cardIndex) {
    const cardsToCancel = this.getTripleCards(cardIndex)
    cardsToCancel.forEach((index) => {
      if (index >= 0 && index < this.inners.length) {
        this.cancelCardAnimation(index)
      }
    })
  }

  // หาการ์ด 3 ใบที่จะพลิก (ใบที่ hover และใบซ้ายขวา)
  getTripleCards(cardIndex) {
    const cards = []

    // เพิ่มใบซ้าย (ถ้ามี)
    if (cardIndex > 0) {
      cards.push(cardIndex - 1)
    }

    // เพิ่มใบที่ hover
    cards.push(cardIndex)

    // เพิ่มใบขวา (ถ้ามี)
    if (cardIndex < this.inners.length - 1) {
      cards.push(cardIndex + 1)
    }

    return cards
  }

  // ยกเลิก animation ของการ์ดเฉพาะใบ
  cancelCardAnimation(cardIndex) {
    // หยุด animation ที่กำลังทำงานอยู่ของการ์ดใบนี้
    this.runningAnims.forEach((anim, index) => {
      if (anim && anim.target && anim.target === this.inners[cardIndex]) {
        try {
          anim.cancel()
        } catch {}
        this.runningAnims[index] = null
      }
    })
    // ลบ null entries ออก
    this.runningAnims = this.runningAnims.filter((anim) => anim !== null)
  }

  // ยกเลิก animation ทั้งหมดที่กำลังทำงานอยู่
  cancelAll() {
    this.runningAnims.forEach((a) => {
      try {
        a.cancel()
      } catch {}
    })
    this.runningAnims = []
  }

  // พลิกการ์ดอัตโนมัติ (พลิกไปด้านหน้าแล้วกลับมาด้านหลัง)
  autoFlip() {
    this.cancelAll()

    // รีเซ็ตตำแหน่งและขนาดของการ์ดทั้งหมดให้เท่ากันก่อนเริ่ม auto flip
    this.resetCardPositions()

    // พลิกไปด้านหน้า
    for (let i = this.inners.length - 1; i >= 0; i -= 1) {
      const delay = (this.inners.length - 1 - i) * this.stepDelay
      const anim = animate(
        this.inners[i],
        { rotateY: 0 },
        {
          duration: this.duration,
          easing: this.flipEasing,
          delay,
          composite: 'replace',
        }
      )
      this.runningAnims.push(anim)
    }

    // รอให้พลิกเสร็จแล้วพลิกกลับ
    setTimeout(() => {
      this.flipAllCardsToBack()
    }, this.duration * 1000 + this.inners.length * this.stepDelay * 1000)
  }

  // เริ่มการพลิกอัตโนมัติ
  startAutoFlip() {
    if (!this.enableAutoFlip) return
    if (this.isHovering) return // ไม่เริ่ม auto-flip ถ้า hover อยู่
    if (this.autoFlipIntervalId) clearInterval(this.autoFlipIntervalId)
    this.autoFlipIntervalId = setInterval(() => this.autoFlip(), this.autoFlipInterval)
  }

  // หยุดการพลิกอัตโนมัติ
  stopAutoFlip() {
    if (this.autoFlipIntervalId) {
      clearInterval(this.autoFlipIntervalId)
      this.autoFlipIntervalId = null
    }
  }

  // ทำให้การ์ดอื่นกระจายออกไปและการ์ดที่ hover ใหญ่ขึ้น
  spreadCards(hoveredIndex) {
    this.cards.forEach((cardEl, index) => {
      if (index === hoveredIndex) {
        // การ์ดที่ hover: ใหญ่ขึ้นและอยู่ด้านบน
        cardEl.style.zIndex = String(this.cards.length + 10)
        animate(
          cardEl,
          {
            scale: this.hoverScaleAmount || 1.1,
            y: -10,
            x: 40,
          },
          {
            duration: this.hoverScaleDuration || 0.3,
            easing: 'ease-out',
          }
        )
      } else {
        // การ์ดอื่น: เคลื่อนที่ออกไปไกลตามทิศทาง
        const distance = index < hoveredIndex ? -150 : 150
        animate(
          cardEl,
          {
            x: distance,
            scale: 0.94,
            opacity: 1,
          },
          {
            duration: 0.6,
            easing: 'ease-out',
          }
        )
      }
    })
  }

  // คืนตำแหน่งการ์ดทั้งหมดกลับเป็นปกติ
  resetCardPositions() {
    this.cards.forEach((cardEl, index) => {
      // คืนค่า z-index เป็นปกติ
      cardEl.style.zIndex = String(index + 2)

      // คืนตำแหน่งและขนาดเป็นปกติ
      animate(
        cardEl,
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
        },
        {
          duration: 0.3,
          easing: 'ease-out',
        }
      )
    })
  }

  // ทำลาย component และล้าง memory
  destroy() {
    this.stopAutoFlip()
    this.cancelAll()

    // ล้าง hover timeout
    if (this.hoverTimeoutId) {
      clearTimeout(this.hoverTimeoutId)
      this.hoverTimeoutId = null
    }

    // ล้าง hover scale animations
    if (this.hoverScaleAnimations) {
      this.hoverScaleAnimations.forEach((anim) => {
        if (anim) {
          try {
            anim.cancel()
          } catch {}
        }
      })
      this.hoverScaleAnimations = []
    }

    // ล้าง firefly animations
    if (this.fireflyAnimations) {
      this.fireflyAnimations.forEach(cardAnims => {
        if (cardAnims && Array.isArray(cardAnims)) {
          cardAnims.forEach(anim => {
            if (anim) {
              try {
                anim.cancel()
              } catch {}
            }
          })
        }
      })
      this.fireflyAnimations = []
    }
    // ล้าง float animations
    if (this.floatAnimations) {
      this.floatAnimations.forEach(anim => {
        if (anim) {
          try { anim.cancel() } catch {}
        }
      })
      this.floatAnimations = []
    }
    // ยกเลิก IntersectionObserver ถ้ามี
    try { this._intersectionObserver?.disconnect?.() } catch {}
  }

  // เริ่มการลอยของดาวสำหรับการ์ดใบที่กำหนด
  startFirefliesForCard(cardIndex) {
    if (!this.enableStars || !this.cards[cardIndex]) return
    const cardElement = this.cards[cardIndex]
    const starsContainer = cardElement.querySelector('.card-stars')
    if (!starsContainer) return

    const starNodes = Array.from(starsContainer.querySelectorAll('.star'))
    if (!this.fireflyAnimations[cardIndex]) this.fireflyAnimations[cardIndex] = []

    // ป้องกันการเริ่มซ้ำ ถ้ามีอนิเมชันอยู่แล้วให้ข้าม
    if (this.fireflyAnimations[cardIndex].length > 0) return

    const rand = (min, max) => Math.random() * (max - min) + min

    starNodes.forEach((starEl) => {
      // เคลื่อนที่ด้วย GPU-friendly transforms (x/y) แทน top/left
      const dx = rand(-18, 18)
      const dy = rand(-18, 18)
      const duration = rand(3.5, 6.5)
      const delay = rand(0, 0.8)

      const anim = animate(
        starEl,
        {
          x: [0, dx, 0],
          y: [0, dy, 0],
        },
        {
          duration,
          delay,
          easing: 'ease-in-out',
          repeat: Infinity,
        }
      )
      this.fireflyAnimations[cardIndex].push(anim)
    })
  }

  // หยุดการลอยของดาวสำหรับการ์ดใบที่กำหนด
  stopFirefliesForCard(cardIndex) {
    const anims = this.fireflyAnimations[cardIndex]
    if (!anims || anims.length === 0) return
    anims.forEach((anim) => {
      try {
        anim.cancel()
      } catch {}
    })
    this.fireflyAnimations[cardIndex] = []
  }
  
  // จัดการ pause/resume แอนิเมชันเมื่อแท็บไม่โฟกัสหรือองค์ประกอบพ้นจอ
  setupVisibilityHandling() {
    const onVisChange = () => {
      if (document.hidden) {
        this.pauseFloatAnimations()
        this.stopAutoFlip()
      } else {
        this.resumeFloatAnimations()
        if (this.enableAutoFlip && !this.isHovering) this.startAutoFlip()
      }
    }
    try { document.addEventListener('visibilitychange', onVisChange, { passive: true }) } catch {}

    try {
      const io = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          this.resumeFloatAnimations()
          if (this.enableAutoFlip && !this.isHovering) this.startAutoFlip()
        } else {
          this.pauseFloatAnimations()
          this.stopAutoFlip()
        }
      }, { threshold: [0, 0.01, 0.1] })
      io.observe(this.container)
      this._intersectionObserver = io
    } catch {}
  }

  pauseFloatAnimations() {
    if (!this.floatAnimations) return
    this.floatAnimations.forEach(anim => { try { anim?.pause?.() } catch {} })
  }

  resumeFloatAnimations() {
    if (!this.floatAnimations) return
    this.floatAnimations.forEach(anim => { try { anim?.play?.() } catch {} })
  }
}
