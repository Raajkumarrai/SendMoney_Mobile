import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin@gmail.com" && password === "admin") {
      navigate("/home");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="max-w-[50%] m-auto">
      <div className="bg-white p-6 relative m-5 border-slate-600 border-2 rounded-xl h-auto py-10 px-4">
        <button className="absolute right-4 top-4">
          <svg
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15.5" cy="15" r="15" fill="black" />
            <path
              d="M21.5 8L9.5 22"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 8L21.5 22"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold mb-6">Login Your Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className=" border rounded-lg border-slate-700 p-4 w-full h-[50px] flex gap-1 items-center">
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2058)">
                <path
                  d="M15.2141 17.1429C18.1727 17.1429 20.5712 14.7444 20.5712 11.7857C20.5712 8.82707 18.1727 6.42859 15.2141 6.42859C12.2554 6.42859 9.85693 8.82707 9.85693 11.7857C9.85693 14.7444 12.2554 17.1429 15.2141 17.1429Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.06396 25.5C7.02019 23.9304 8.36413 22.6331 9.96656 21.7331C11.569 20.8328 13.376 20.36 15.214 20.36C17.0519 20.36 18.8589 20.8328 20.4614 21.7331C22.0639 22.6331 23.4076 23.9304 24.364 25.5"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.2142 28.9286C22.9069 28.9286 29.1428 22.6927 29.1428 15C29.1428 7.30748 22.9069 1.07144 15.2142 1.07144C7.52168 1.07144 1.28564 7.30748 1.28564 15C1.28564 22.6927 7.52168 28.9286 15.2142 28.9286Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2058">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(0.214355)"
                  />
                </clipPath>
              </defs>
            </svg>
            <input
              className="focus:outline-none focus:border-transparent text-xl"
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="border rounded-lg border-slate-700 p-4 w-full h-[50px] flex gap-1 items-center">
            <svg
              width="30"
              height="26"
              viewBox="0 0 30 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.667 13.8143L24.267 1.21429L28.5527 5.50001"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.4458 6.03574L23.1958 9.78574"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.12437 24.7857C10.6748 24.7857 13.5529 21.9077 13.5529 18.3572C13.5529 14.8068 10.6748 11.9286 7.12437 11.9286C3.57398 11.9286 0.695801 14.8068 0.695801 18.3572C0.695801 21.9077 3.57398 24.7857 7.12437 24.7857Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              className="focus:outline-none focus:border-transparent text-xl"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <span className="text-red-500 text-sm">{error}</span>}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="keepLoggedIn"
                checked={keepLoggedIn}
                onCheckedChange={(checked) =>
                  setKeepLoggedIn(checked as boolean)
                }
              />
              <label htmlFor="keepLoggedIn" className="text-sm">
                Keep me logged In
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-gray-500 hover:underline"
            >
              Forget Password?
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#b3ffff] text-black hover:bg-[#99ffff]"
          >
            LOGIN
          </Button>
          <p className="text-center text-sm">
            Not a member?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
