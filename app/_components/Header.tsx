import Image from "next/image";

const Header = () => {
  return (
    <>
      <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
          <h1 className="text-base font-bold md:text-2xl">AI Mock Interview</h1>
        </div>
        <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          Login
        </button>
      </nav>
    </>
  );
};
export default Header;
