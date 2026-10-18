import { useEffect } from 'react'
import { listingInfo } from '../../assets/data'
import { AmenityIcon } from './listing-icons'

interface AmenitiesDialogProps {
  open: boolean
  onClose: () => void
}

const dialogFont =
  '"Airbnb Cereal VF", Circular, system-ui, Roboto, "Helvetica Neue", sans-serif'

const isUnavailable = (name: string) =>
  listingInfo.unavailableAmenities.some((entry) => entry === name)

const CloseGlyph = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M4 4 L14 14 M14 4 L4 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const StruckIcon = () => (
  <svg
    className="pointer-events-none absolute inset-0"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M3 21 L21 3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const AmenitiesDialog = ({ open, onClose }: AmenitiesDialogProps) => {
  useEffect(() => {
    const onTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      document.body.classList.add('kbd')
    }
    document.addEventListener('keydown', onTab)
    return () => document.removeEventListener('keydown', onTab)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      event.preventDefault()
      onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow || 'visible'
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div
      className={`amenities-overlay${open ? ' is-open' : ''}`}
      aria-hidden={open ? undefined : true}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={listingInfo.amenitiesHeading}
        className="amenities-panel"
        style={{ fontFamily: dialogFont }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex h-16 shrink-0 items-center bg-transparent px-6">
          <button
            type="button"
            aria-label="Close"
            className="amenities-close -ml-2 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-[#222222]"
            onClick={onClose}
          >
            <CloseGlyph />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-12 pb-12">
          <h2 className="m-0 mt-3 mb-6 text-[22px] leading-[31px] font-medium text-[#222222]">
            {listingInfo.amenitiesHeading}
          </h2>
          {listingInfo.amenityGroups.map((group) => (
            <div key={group.title} className="mb-[30px]">
              <h3 className="m-0 mb-1 text-[18px] font-medium text-[#222222]">
                {group.title}
              </h3>
              <ul className="m-0 list-none p-0">
                {group.items.map((item) => {
                  const unavailable = isUnavailable(item)
                  return (
                    <li
                      key={`${group.title}-${item}`}
                      className={`flex items-center gap-4 border-b border-solid border-[#ebebeb] py-4 text-[16px] leading-[23px] font-normal ${
                        unavailable ? 'text-[#717171]' : 'text-[#222222]'
                      }`}
                    >
                      <span className="relative h-6 w-6 shrink-0">
                        <AmenityIcon name={item} />
                        {unavailable ? <StruckIcon /> : null}
                      </span>
                      <span className={unavailable ? 'line-through' : undefined}>
                        {item}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { AmenitiesDialog }
