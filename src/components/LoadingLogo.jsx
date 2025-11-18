export default function LoadingLogo() {
  return (
    <div className="flex items-center justify-center py-10" aria-label="Loading">
      <svg
        className="h-10 w-10 animate-spin-slow text-rebound-accent"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="60 40"
          strokeLinecap="round"
          className="opacity-40"
        />
        <path
          d="M16 30h14a4 4 0 0 0 4-4v-6H16v10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 22h2a3 3 0 0 1 0 6h-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 14c0 2-1.5 2.5-1.5 4.5M24 14c0 2-1.5 2.5-1.5 4.5M28 14c0 2-1.5 2.5-1.5 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
