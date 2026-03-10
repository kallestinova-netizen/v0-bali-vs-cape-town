export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 1200 20" 
      className={`w-full h-5 ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0,10 Q150,0 300,10 T600,10 T900,10 T1200,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-line"
      />
    </svg>
  )
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={`w-5 h-5 ${className}`}
      fill="none"
    >
      <circle cx="12" cy="12" r="10" className="fill-bali/20" />
      <path
        d="M8 12l2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-bali"
      />
    </svg>
  )
}
