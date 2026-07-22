export default function Logo({ className = 'h-20', title = 'FJ Property Services' }) {
  return (
    <img
      src="/FJ.png"
      alt={title}
      className={`${className} w-auto object-contain`}
    />
  )
}
