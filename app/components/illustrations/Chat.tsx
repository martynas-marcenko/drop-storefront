const Chat = ({...props}) => {
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
        <path d="M27.5 21.9C29.7 19.8 31 17 31 14c0-6.8-6.7-12-15-12S1 7.2 1 14s6.7 12.3 15 12.3c1.5 0 2.9-.2 4.2-.5L28 29l-.5-7.1zM9 11h14M9 17h8"></path>
      </g>
    </svg>
  );
};

export default Chat;
