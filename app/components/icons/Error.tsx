const Error = ({ ...props }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <circle cx="8" cy="8" r="8" className="fill-red-700" />
      <path fill="#fff" d="M7 4h2v4H7zM7 10h2v2H7z" />
    </svg>
  )
}

export default Error
