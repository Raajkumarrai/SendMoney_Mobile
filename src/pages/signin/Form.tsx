import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin@gmail.com" && password === "admin") {
      navigate("/home");
    } else {
      setError("Invalid username or password.");
    }
  };

  // Desktop layout or mobile login screen
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black/95 p-4">
      {/* Desktop and mobile have different layouts */}
      {isMobile ? (
        <div className="w-full max-w-sm rounded-3xl overflow-hidden flex flex-col bg-white shadow-xl">
          {/* Curved green section at top */}
          <div className="relative h-48 bg-[#0e746b] rounded-br-[40%]">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
                <img src="../logo.png" alt="Logo" />
              </div>
              <span className="text-xl font-medium text-white">SendMoney</span>
            </div>
          </div>

          {/* Form section */}
          <div className="p-6 flex flex-col">
            <h2 className="text-2xl font-bold text-[#0e746b] mb-1 text-center">
              Welcome
            </h2>
            <p className="text-xs text-center mb-6">
              Login in to your account to continue
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
              <div className="rounded-full bg-emerald-50 p-3 w-full flex">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2141 17.1429C18.1727 17.1429 20.5712 14.7444 20.5712 11.7857C20.5712 8.82707 18.1727 6.42859 15.2141 6.42859C12.2554 6.42859 9.85693 8.82707 9.85693 11.7857C9.85693 14.7444 12.2554 17.1429 15.2141 17.1429Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.06396 25.5C7.02019 23.9304 8.36413 22.6331 9.96656 21.7331C11.569 20.8328 13.376 20.36 15.214 20.36C17.0519 20.36 18.8589 20.8328 20.4614 21.7331C22.0639 22.6331 23.4076 23.9304 24.364 25.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.2142 28.9286C22.9069 28.9286 29.1428 22.6927 29.1428 15C29.1428 7.30748 22.9069 1.07144 15.2142 1.07144C7.52168 1.07144 1.28564 7.30748 1.28564 15C1.28564 22.6927 7.52168 28.9286 15.2142 28.9286Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  className="w-full bg-transparent focus:outline-none px-2 text-sm"
                  type="text"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="rounded-full bg-emerald-50 p-3 w-full flex">
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_2065)">
                    <path
                      d="M12.667 15.8143L25.267 3.21429L29.5527 7.50001"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.4458 8.03574L24.1958 11.7857"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.12437 26.7857C11.6748 26.7857 14.5529 23.9077 14.5529 20.3572C14.5529 16.8068 11.6748 13.9286 8.12437 13.9286C4.57398 13.9286 1.6958 16.8068 1.6958 20.3572C1.6958 23.9077 4.57398 26.7857 8.12437 26.7857Z"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2065">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0.624512)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <input
                  className="w-full bg-transparent focus:outline-none px-2 text-sm"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && <span className="text-red-500 text-xs">{error}</span>}

              <div className="flex justify-end">
                <Link
                  to="./password"
                  className="text-xs text-gray-500 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0e746b] text-white hover:bg-[#0d946c] rounded-full py-5"
              >
                LOG IN
              </Button>

              <p className="text-center text-xs mt-2">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#0e746b] hover:underline">
                  sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      ) : (
        // Desktop layout
        <div className="w-full max-w-4xl h-[500px] rounded-3xl overflow-hidden flex shadow-xl">
          {/* Left side - Green section */}
          <div className="w-1/2 bg-[#0e746b] text-white p-8 flex flex-col relative">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img src="../logo.png" alt="Logo" />
              </div>
              <span className="text-xl font-medium">SendMoney</span>
            </div>

            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-sm mb-1">To stay connected with us</p>
            <p className="text-sm mb-8">please login with your personal info</p>

            <button className="border border-white rounded-full py-2 px-4 mt-auto mb-4 text-sm hover:bg-[#0d846c] hover:text-white transition-colors">
              <Link to="/signup">SIGN UP</Link>
            </button>

            <div className="text-xs mt-auto">
              <span>SEND MONEY | EVERYWHERE | ANYWHERE</span>
            </div>
          </div>

          {/* Right side - White section */}
          <div className="w-1/2 bg-white p-8 flex flex-col">
            <h2 className="text-3xl font-bold text-[#0e746b] mb-1 text-center">
              Welcome
            </h2>
            <p className="text-sm text-center mb-8">
              Login in to your account to continue
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
              <div className="rounded-full bg-emerald-50 p-3 w-full flex">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2141 17.1429C18.1727 17.1429 20.5712 14.7444 20.5712 11.7857C20.5712 8.82707 18.1727 6.42859 15.2141 6.42859C12.2554 6.42859 9.85693 8.82707 9.85693 11.7857C9.85693 14.7444 12.2554 17.1429 15.2141 17.1429Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.06396 25.5C7.02019 23.9304 8.36413 22.6331 9.96656 21.7331C11.569 20.8328 13.376 20.36 15.214 20.36C17.0519 20.36 18.8589 20.8328 20.4614 21.7331C22.0639 22.6331 23.4076 23.9304 24.364 25.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.2142 28.9286C22.9069 28.9286 29.1428 22.6927 29.1428 15C29.1428 7.30748 22.9069 1.07144 15.2142 1.07144C7.52168 1.07144 1.28564 7.30748 1.28564 15C1.28564 22.6927 7.52168 28.9286 15.2142 28.9286Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  className="w-full bg-transparent focus:outline-none px-2"
                  type="text"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="rounded-full bg-emerald-50 p-3 w-full flex">
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_2065)">
                    <path
                      d="M12.667 15.8143L25.267 3.21429L29.5527 7.50001"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.4458 8.03574L24.1958 11.7857"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.12437 26.7857C11.6748 26.7857 14.5529 23.9077 14.5529 20.3572C14.5529 16.8068 11.6748 13.9286 8.12437 13.9286C4.57398 13.9286 1.6958 16.8068 1.6958 20.3572C1.6958 23.9077 4.57398 26.7857 8.12437 26.7857Z"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2065">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0.624512)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <input
                  className="w-full bg-transparent focus:outline-none px-2"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && <span className="text-red-500 text-sm">{error}</span>}

              <div className="flex justify-end">
                <Link
                  to="/password"
                  className="text-xs text-gray-500 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0e746b] text-white hover:bg-[#0d846c] rounded-full py-5"
              >
                LOG IN
              </Button>

              <p className="text-center text-sm mt-4">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#0e746b] hover:underline">
                  sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
