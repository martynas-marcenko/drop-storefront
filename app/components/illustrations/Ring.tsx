const Ring = ({...props}) => {
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
        <path d="M18 2a12 12 0 0112 12M24 14a6 6 0 00-6-6M20.693 19.293l-2.282 2.853a24.077 24.077 0 01-8.557-8.557l2.853-2.282a1.939 1.939 0 00.56-2.3l-2.6-5.855a1.939 1.939 0 00-2.26-1.09l-4.95 1.284A1.95 1.95 0 002.018 5.5 28.761 28.761 0 0026.5 29.982a1.95 1.95 0 002.153-1.439l1.284-4.95a1.939 1.939 0 00-1.089-2.258l-5.855-2.6a1.939 1.939 0 00-2.3.558z"></path>
      </g>
    </svg>
  );
};

export default Ring;
