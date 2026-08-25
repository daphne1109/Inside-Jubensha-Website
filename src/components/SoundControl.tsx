type Props = {
  on: boolean
  disabled: boolean
  onToggle: () => void
}

export default function SoundControl({ on, disabled, onToggle }: Props) {
  return (
    <button
      type="button"
      className="sound"
      data-on={on}
      disabled={disabled}
      aria-pressed={on}
      onClick={onToggle}
    >
      <span className="sound__waves" aria-hidden="true">
        <i /><i /><i />
      </span>
      {disabled ? '无声' : on ? '有声' : '静音'}
    </button>
  )
}
