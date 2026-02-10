"use client"

import React, { useEffect, useState } from 'react'
import useTopicStore from '@/store/topic.store'
import ClubAPI from '@/lib/api/enpoints/club.api'

const normalizeTopics = (raw) => {
  if (!raw) return []
  if (Array.isArray(raw)) return raw
  if (raw?.data && Array.isArray(raw.data)) return raw.data
  return []
}

const TopicList = ({ onSelectTopic }) => {
  const { selectedTopic, setSelectedTopic } = useTopicStore()
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await ClubAPI.getInterestTopics()
        const raw = res?.data
        setTopics(normalizeTopics(raw))
      } catch (err) {
        console.error('TopicList: getInterestTopics failed', err)
        setTopics([])
      } finally {
        setLoading(false)
      }
    }
    fetchTopics()
  }, [])

  const list = topics

  useEffect(() => {
    const ids = topics.map((t) => t.id)
    if (ids.length > 0 && !ids.includes(selectedTopic.id)) {
      setSelectedTopic(topics[0])
    }
  }, [topics, selectedTopic.id, setSelectedTopic])

  const handleClick = (item) => {
    setSelectedTopic(item)
    onSelectTopic?.(item)
  }

  if (loading) {
    return (
      <div className='w-full overflow-x-auto scrollbar-hide mb-4'>
        <ul className='flex flex-nowrap gap-4 sm:gap-6 pb-2 min-w-0'>
          <li>
            <span className='text-sm sm:text-base font-normal text-gray-400'>กำลังโหลด...</span>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className='w-full overflow-x-auto scrollbar-hide mb-4'>
      <ul className='flex flex-nowrap gap-4 sm:gap-6 pb-2 min-w-0'>
        {list.map((item) => {
          const isActive = selectedTopic.id === item.id
          return (
            <li key={item.id}>
              <button
                type='button'
                onClick={() => handleClick(item)}
                className={`whitespace-nowrap text-sm sm:text-base transition-colors ${
                  isActive
                    ? 'font-semibold text-black'
                    : 'font-normal text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.name}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TopicList
