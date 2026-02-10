import { create } from 'zustand'

const DEFAULT_TOPIC = { id: 'all', name: 'ทั้งหมด' }

const useTopicStore = create((set) => ({
  selectedTopic: DEFAULT_TOPIC,
  setSelectedTopic: (topic) => set({ selectedTopic: topic ?? DEFAULT_TOPIC }),
  resetTopic: () => set({ selectedTopic: DEFAULT_TOPIC }),
}))

export default useTopicStore
