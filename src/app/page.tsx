"use client";
import React, { useState } from 'react';
import Camera from '@/components/Camera';
import FilterSelector from '@/components/FilterSelector';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`shadow-lg rounded-lg bg-white ${className}`}>
    {children}
  </div>
);

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const Button: React.FC<{ children: React.ReactNode; onClick: () => void; className?: string }> = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ${className}`}
  >
    {children}
  </button>
);

export default function CameraApp() {
  const [filter, setFilter] = useState('none');
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Camera Web App</h1>
          {showCamera ? (
            <>
              <Camera filter={filter} />
              <div className="mt-4">
                <FilterSelector onFilterChange={setFilter} />
              </div>
              <Button className="mt-4 w-full" onClick={() => setShowCamera(false)}>Close Camera</Button>
            </>
          ) : (
            <Button className="w-full" onClick={() => setShowCamera(true)}>Open Camera</Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}