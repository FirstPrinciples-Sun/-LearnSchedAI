const Header = () => {
  return (
    <div className="flex flex-wrap justify-between gap-3 items-start">
      <div className="flex min-w-72 flex-col gap-2">
        <p className="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
          Master Timetable
        </p>
        <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal">
          Use the AI to generate, view, and resolve conflicts in the class
          schedule.
        </p>
      </div>
    </div>
  );
};

export default Header;
