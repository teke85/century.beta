"use client"

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface ToggleMenuButtonProps {
  onToggle: (isOpen: boolean) => void
  className?: string
}

const ToggleMenuButton: React.FC<ToggleMenuButtonProps> = ({ onToggle, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onToggle(newState)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none  focus:ring-inset ${className}`}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
    </button>
  )
}

export default ToggleMenuButton

