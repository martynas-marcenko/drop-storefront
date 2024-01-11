export const IntroHeading = ({text}: {text: string}) => {
  return (
    <div className="my-sm md:my-[100px]">
      <div className="flex w-full justify-center">
        <h2 className="max-w-3xl px-6 text-center text-4xl font-semibold leading-snug text-black md:text-5xl">
          <div className="bg-black box-decoration-clone bg-clip-text text-transparent">
            {text}
          </div>
        </h2>
      </div>
    </div>
  );
};
