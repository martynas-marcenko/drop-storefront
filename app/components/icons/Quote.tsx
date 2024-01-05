const Quote = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12.301h3.6V21.8H0v-7.188C0 6.76 3.2 2.556 9.6 2v3.562C7.2 6.225 6 8.13 6 11.274V12.3Zm14.4 0H24V21.8h-9.6v-7.188C14.4 6.76 17.6 2.556 24 2v3.562c-2.4.663-3.6 2.568-3.6 5.712V12.3Z"
      />
    </svg>
  )
}

export default Quote
