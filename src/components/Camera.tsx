'use client'

import React, { useState, useRef, useCallback } from 'react'
import Webcam from 'react-webcam'
import { CameraIcon, RefreshCw } from 'lucide-react'
import FileSaver from 'file-saver'

interface CameraProps {
  filter: string
}

const Camera: React.FC<CameraProps> = ({ filter }) => {
  const webcamRef = useRef<Webcam>(null)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user')

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()
    if (imageSrc) {
      const blob = dataURItoBlob(imageSrc)
      FileSaver.saveAs(blob, 'camera-capture.png')
    }
  }, [webcamRef])

  const toggleCamera = () => {
    setFacingMode(prevMode => prevMode === 'user' ? 'environment' : 'user')
  }

  const dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI.split(',')[1])
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }
    return new Blob([ab], { type: mimeString })
  }

  return (
    <div className="relative">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/png"
        videoConstraints={{ facingMode }}
        className="w-full rounded-lg"
        style={{ filter }}
      />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
        <button
          onClick={capture}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <CameraIcon className="w-5 h-5 mr-2" />
          Capture
        </button>
        <button
          onClick={toggleCamera}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Switch Camera
        </button>
      </div>
    </div>
  )
}

export default Camera