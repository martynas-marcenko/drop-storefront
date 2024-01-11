const LovePin = ({...props}) => {
  return (
    <svg
      viewBox="0 0 17.6 24"
      width={props.width || '24'}
      height={props.height || '24'}
      {...props}
    >
      <path d="M8.8 0C3.94 0 0 3.96 0 8.85 0 14.25 7.28 24 8.8 24s8.8-9.75 8.8-15.15C17.6 3.96 13.66 0 8.8 0Z" />
      <path
        d="m5.1 10.12 3.32 3.33c.21.2.54.2.75 0l3.32-3.33c.67-.67.94-1.64.71-2.57-.21-.85-.83-1.55-1.65-1.87-.82-.32-1.74-.22-2.48.27l-.28.19-.28-.19c-.75-.5-1.7-.6-2.54-.25S4.53 6.79 4.35 7.67c-.18.89.1 1.8.74 2.44Z"
        fill="#fff"
      />
      <path d="M5.85 9.38c-.41-.41-.58-1.01-.44-1.57.13-.52.5-.95 1.01-1.14.5-.19 1.07-.13 1.52.17l.58.38c.17.12.4.12.58 0l.58-.38c.45-.3 1.01-.36 1.52-.17.5.19.88.62 1.01 1.14.14.56-.02 1.16-.44 1.57l-2.95 2.96-2.95-2.96Z" />
    </svg>
  );
};

export default LovePin;
