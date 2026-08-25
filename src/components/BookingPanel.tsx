import { useEffect, useRef, useState } from 'react'
import { BOOKING } from '../data/content'

type Props = { open: boolean; onClose: () => void }

export default function BookingPanel({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [qrMissing, setQrMissing] = useState(false)

  // <dialog> gives focus trapping, focus restore and Escape for free.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      className="panel"
      aria-labelledby="booking-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose()
      }}
    >
      <div className="panel__card">
        <button type="button" className="panel__close" onClick={onClose} aria-label="关闭">
          ✕
        </button>
        <p className="eyebrow">{BOOKING.platform}</p>
        <h2 id="booking-title" className="panel__title">{BOOKING.title}</h2>
        <div className="panel__qr" data-placeholder={qrMissing}>
          {qrMissing ? (
            <span>二维码待提供<br />QR PLACEHOLDER</span>
          ) : (
            <img src={BOOKING.qrSrc} alt="预约二维码" onError={() => setQrMissing(true)} />
          )}
        </div>
        <p className="panel__instruction">{BOOKING.instruction}</p>
      </div>
    </dialog>
  )
}
