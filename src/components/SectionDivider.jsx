export default function SectionDivider() {
  return (
    <div className="my-10 flex justify-center" aria-hidden="true">
      <svg
        className="h-6 w-40 text-rebound-accent/30"
        viewBox="0 0 160 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12C26 6 40 6 64 12C88 18 104 18 128 12C144 8 152 8 158 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
