'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

interface FilterSelectorProps {
  onFilterChange: (filter: string) => void
}

const filters = [
  { name: 'None', value: 'none' },
  { name: 'Grayscale', value: 'grayscale(100%)' },
  { name: 'Sepia', value: 'sepia(100%)' },
  { name: 'Invert', value: 'invert(100%)' },
  { name: 'Blur', value: 'blur(5px)' },
  { name: 'Hue Rotate', value: 'hue-rotate(90deg)' },
]

const FilterSelector: React.FC<FilterSelectorProps> = ({ onFilterChange }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          onClick={() => onFilterChange(filter.value)}
          className="w-full"
          variant="outline"
        >
          {filter.name}
        </Button>
      ))}
    </div>
  )
}

export default FilterSelector

