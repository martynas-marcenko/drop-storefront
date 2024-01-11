const Letter = ({...props}) => {
  return (
    <svg
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        stroke="#111"
      >
        <path d="M1 15v10a3 3 0 003 3h24a3 3 0 003-3V15"></path>
        <path d="M31 10V7a3 3 0 00-3-3H4a3 3 0 00-3 3v3l15 8z"></path>
      </g>
    </svg>
  );
};

export default Letter;
