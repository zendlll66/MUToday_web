"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CircleChevronDown } from 'lucide-react'

const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left hover:opacity-80 transition-opacity"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold text-black pr-4">
          {item.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <CircleChevronDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4">
              <p className="text-base text-black leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Accordion = ({ 
  title = "คำถามที่พบบ่อย",
  subtitle = "Frequently Asked Questions",
  items = [],
  className = ""
}) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    // If clicking the same item, close it. Otherwise, open the new one
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className={`w-full max-w-[810px] mx-auto px-4 ${className}`}>
      <div className="bg-white py-[36px] px-[56px] rounded-3xl border border-black/20">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base text-gray-500">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion Items */}
        <div className="space-y-0">
          {items.map((item, index) => (
            <AccordionItem
              key={item.id || index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accordion
