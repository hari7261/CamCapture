'use client'

import { useState } from 'react'
import Camera from '@/components/Camera'
import FilterSelector from '@/components/FilterSelector'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CameraApp() {
  const [filter, setFilter] = useState('none')
  const [showCamera, setShowCamera] = useState(false)

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
  )
}

