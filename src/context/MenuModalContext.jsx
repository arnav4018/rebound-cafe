import { createContext, useContext, useState, useMemo, useCallback } from 'react'

const MenuModalContext = createContext(null)

export function MenuModalProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(null)

  const openItem = useCallback((item) => {
    setSelectedItem(item)
  }, [])

  const closeItem = useCallback(() => {
    setSelectedItem(null)
  }, [])

  const value = useMemo(
    () => ({ selectedItem, openItem, closeItem }),
    [selectedItem, openItem, closeItem],
  )

  return <MenuModalContext.Provider value={value}>{children}</MenuModalContext.Provider>
}

export function useMenuModal() {
  const ctx = useContext(MenuModalContext)
  if (!ctx) {
    throw new Error('useMenuModal must be used within a MenuModalProvider')
  }
  return ctx
}
