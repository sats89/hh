"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxProps {
  image: {
    src: string
    alt: string
    title: string
  }
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  hasNext: boolean
  hasPrev: boolean
}

export function Lightbox({ image, isOpen, onClose, onNext, onPrev, hasNext, hasPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          if (hasPrev) onPrev()
          break
        case "ArrowRight":
          if (hasNext) onNext()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    // Prevent body scroll when lightbox is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Previous Button */}
      {hasPrev && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
          onClick={onPrev}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      )}

      {/* Next Button */}
      {hasNext && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
          onClick={onNext}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      )}

      {/* Image Container */}
      <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" priority />
        </div>
      </div>

      {/* Image Title */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
        <h3 className="text-lg font-medium">{image.title}</h3>
      </div>

      {/* Background Click to Close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-label="Close lightbox" />
    </div>
  )
}
