import {
  APNG_SMALLEST_BASE64,
  AVIF_SMALLEST_BASE64,
  BMP_SMALLEST_BASE64,
  GIF_SMALLEST_BASE64,
  HEIC_SMALLEST_BASE64,
  ICO_SMALLEST_BASE64,
  JPG_SMALLEST_BASE64,
  JXL_SMALLEST_BASE64,
  PNG_SMALLEST_BASE64,
  TIFF_SMALLEST_BASE64,
  WEBP_SMALLEST_BASE64,
} from './smallest'

const isSsr = typeof window === 'undefined'

export function isImageSupported(base64: string): Promise<boolean> {
  if (isSsr) {
    return Promise.resolve(false)
  }

  return new Promise((resolve) => {
    const img = new Image()
    img.onerror = img.onabort = () => {
      resolve(false)
    }

    img.onload = () => {
      resolve(true)
    }

    img.src = base64
  })
}

export function isGifSupported() {
  return isImageSupported(GIF_SMALLEST_BASE64)
}

export function isJpegSupported() {
  return isImageSupported(JPG_SMALLEST_BASE64)
}

export function isJpegXlSupported() {
  return isImageSupported(JXL_SMALLEST_BASE64)
}

export function isPngSupported() {
  return isImageSupported(PNG_SMALLEST_BASE64)
}

export function isBmpSupported() {
  return isImageSupported(BMP_SMALLEST_BASE64)
}

export function isAPngSupported() {
  return isImageSupported(APNG_SMALLEST_BASE64)
}

export function isTiffSupported() {
  return isImageSupported(TIFF_SMALLEST_BASE64)
}

export function isIcoSupported() {
  return isImageSupported(ICO_SMALLEST_BASE64)
}

export function isWebpSupported() {
  return isImageSupported(WEBP_SMALLEST_BASE64)
}

export function isHeicSupported() {
  return isImageSupported(HEIC_SMALLEST_BASE64)
}

export function isAvifSupported() {
  return isImageSupported(AVIF_SMALLEST_BASE64)
}

export function isSvgSupported() {
  return Boolean(
    typeof window !== 'undefined'
    && document.createElementNS
    && document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect,
  )
}
