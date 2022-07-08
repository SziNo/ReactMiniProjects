import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setISidebarOpen] = useState(false)
  const [isModalOpen, setIModalOpen] = useState(false)

  const openSidebar = () => setISidebarOpen(true)
  const closeSidebar = () => setISidebarOpen(false)
  const openModal = () => setIModalOpen(true)
  const closeModal = () => setIModalOpen(false)

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
