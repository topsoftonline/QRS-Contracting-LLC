'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface LightboxProps {
  images: string[]
  isOpen: boolean
  initialIndex?: number
  onClose: () => void
}

export function Lightbox({
  images,
  isOpen,
  initialIndex = 0,
  onClose,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, initialIndex])

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation()
      setCurrentIndex((prev) => (prev + 1) % images.length)
    },
    [images.length]
  )

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation()
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    },
    [images.length]
  )

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, handleNext, handlePrev])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 text-white hover:text-gold transition-colors p-2"
            aria-label="Close gallery"
          >
            <FaTimes size={24} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 z-50 text-white hover:text-gold transition-colors p-2 hidden md:block"
                aria-label="Previous image"
              >
                <FaChevronLeft size={32} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 z-50 text-white hover:text-gold transition-colors p-2 hidden md:block"
                aria-label="Next image"
              >
                <FaChevronRight size={32} />
              </button>
            </>
          )}

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipeConfidenceThreshold = 10000
              const swipePower = Math.abs(offset.x) * velocity.x

              if (swipePower < -swipeConfidenceThreshold) {
                handleNext()
              } else if (swipePower > swipeConfidenceThreshold) {
                handlePrev()
              }
            }}
            className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain pointer-events-none"
                priority
              />
            </div>
          </motion.div>

          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
