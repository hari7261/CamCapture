"use client";
import React, { useState } from 'react';
import Camera from '@/components/Camera';
import FilterSelector from '@/components/FilterSelector';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`
    shadow-2xl 
    rounded-2xl 
    bg-gradient-to-br 
    from-gray-800 
    to-gray-900 
    border-2 
    border-gray-700 
    overflow-hidden 
    ${className}
  `}>
    {children}
  </div>
);

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`
    p-6 
    text-white 
    relative 
    ${className}
  `}>
    {children}
  </div>
);

const Button: React.FC<{ children: React.ReactNode; onClick: () => void; className?: string }> = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`
      w-full 
      bg-gradient-to-r 
      from-cyan-500 
      to-blue-600 
      text-white 
      font-semibold 
      py-3 
      px-4 
      rounded-xl 
      hover:scale-105 
      transition 
      duration-300 
      transform 
      shadow-lg 
      hover:shadow-xl 
      focus:outline-none 
      focus:ring-2 
      focus:ring-cyan-400 
      ${className}
    `}
  >
    {children}
  </button>
);

export default function CameraApp() {
  const [filter, setFilter] = useState('none');
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div className="
      min-h-screen 
      bg-gradient-to-br 
      from-gray-900 
      to-black 
      flex 
      items-center 
      justify-center 
      p-4
    ">
      <Card className="w-full max-w-md">
        <CardContent>
          <h1 className="
            text-3xl 
            font-bold 
            mb-4 
            text-center 
            bg-clip-text 
            text-transparent 
            bg-gradient-to-r 
            from-cyan-400 
            to-blue-600
          ">
            Camera Web App
          </h1>
          {showCamera ? (
            <>
              <div className="rounded-xl overflow-hidden shadow-2xl mb-4">
                <Camera filter={filter} />
              </div>
              <div className="mb-4">
                <FilterSelector onFilterChange={setFilter} />
              </div>
              <Button onClick={() => setShowCamera(false)}>
                Close Camera
              </Button>
            </>
          ) : (
            <Button onClick={() => setShowCamera(true)}>
              Open Camera
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}