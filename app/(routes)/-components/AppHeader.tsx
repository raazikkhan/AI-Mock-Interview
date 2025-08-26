import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const AppHeader = () => {
  const menuOptions = [
    { name: "dashboard", path: "/dashboard" },
    { name: "upgrade", path: "/upgrade" },
    { name: "how it works", path: "/how-it-works" },
  ];

  return (
    <>
      <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
          {/*<h1 className="text-base font-bold md:text-2xl">AI Mock Interview</h1>*/}
        </div>

        <div>
          <ul className="flex gap-5">
            {menuOptions.map((option) => (
              <li
                key={option.name}
                className=" cursor-pointer  text-lg scale-100 hover:scale-105 transition-transform duration-200"
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
        <UserButton />
      </nav>
    </>
  );
};
export default AppHeader;
