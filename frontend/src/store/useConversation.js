import { create } from 'zustand'

const useConversation = create((set) => ({
  startSearching: false,
  setStartSearching: (value) => set({ startSearching: value }),
  selectedConversation: null,
  setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}))

export default useConversation;