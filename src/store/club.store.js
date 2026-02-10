import { create } from 'zustand'

const useClubStore = create((set) => ({
  searchKeyword: '',
  setSearchKeyword: (keyword) => set({ searchKeyword: keyword ?? '' }),
}))

export default useClubStore
