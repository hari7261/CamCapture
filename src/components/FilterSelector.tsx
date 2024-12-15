'use client'

import React from 'react'

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

const Button: React.FC<{
  onClick: () => void;
  className?: string;
  variant?: 'outline' | 'filled';
  children: React.ReactNode;
}> = ({ onClick, className, variant, children }) => {
  const baseStyle = "px-4 py-2 rounded focus:outline-none";
  const variantStyle = variant === 'outline' ? "border border-gray-300" : "bg-blue-500 text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};

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

export default FilterSelector;