import { useState } from "react";

const TopNav = () => {
  const [language, setLanguage] = useState("English");
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Nepali" : "English"));
  };
  return (
    <div className="sticky top-0 z-20">
      <div className="h-auto w-full bg-black text-white font-normal p-1 flex justify-between font-arial ">
        <div className="flex gap-1">
          <svg
            width="25"
            height="23"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.7757 6.27797C5.64438 5.34215 5.87519 4.36579 6.4294 3.51308C6.98373 2.66043 7.82761 1.98342 8.8193 1.59596L9.66555 1.2498C10.0481 1.10216 10.466 1.09254 10.8301 1.22302C11.1942 1.3535 11.4755 1.61375 11.6137 1.94798L12.87 5.15473C12.9998 5.49007 12.9753 5.86997 12.8016 6.21265C12.628 6.55531 12.3191 6.83333 11.9415 6.98679C11.5621 7.14203 11.2518 7.42195 11.0771 7.76663C10.9024 8.11131 10.8772 8.49337 11.0069 8.83106L13.0205 13.8823C13.0858 14.0502 13.1883 14.2016 13.3219 14.3278C13.4556 14.454 13.6178 14.5524 13.799 14.6174C13.9803 14.6823 14.1771 14.7125 14.3779 14.7062C14.5787 14.6999 14.7795 14.6572 14.9687 14.5806C15.3486 14.4329 15.7643 14.4228 16.1263 14.5526C16.4883 14.6823 16.7676 14.9414 16.904 15.2741L18.1794 18.4733C18.309 18.811 18.2838 19.193 18.1091 19.5377C17.9344 19.8824 17.6241 20.1623 17.2447 20.3176L16.3917 20.6469C15.4048 21.046 14.3258 21.1334 13.3364 20.8945C12.3469 20.6555 11.5072 20.1047 10.9586 19.3347C8.30388 15.3958 6.54473 10.9641 5.7757 6.27797Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Contact: 0123456789</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Help</span>
          <span>|</span>
          <div className="relative">
            <button
              className="flex items-center gap-1"
              onClick={toggleLanguage}
            >
              {language} <span className="text-xs">▼</span>
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TopNav;
