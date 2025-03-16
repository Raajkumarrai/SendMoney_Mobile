import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    username: "",
    password: "",
    address: "",
    city: "",
    store: "",
    zipcode: "",
    mobile: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.dob === "" ||
      formData.address === "" ||
      formData.password.length <= 8 ||
      formData.mobile.length != 10
    ) {
      setError("Every field must be filled to get registered.");
    } else if (formData.agreeToTerms === false) {
      setError("Please agree to terms and conditions");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black/95 p-4">
      {isMobile ? (
        // Mobile layout
        <div className="w-full max-w-sm rounded-3xl overflow-hidden flex flex-col bg-white shadow-xl mb-8">
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
              Register
            </h2>
            <p className="text-xs text-center mb-6">
              Create your account to get started
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
              <div className="space-y-3">
                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-sm"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-sm"
                    placeholder="Middle Name"
                    value={formData.middleName}
                    onChange={(e) =>
                      setFormData({ ...formData, middleName: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-sm"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-sm"
                    type="date"
                    placeholder="DOB"
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-sm"
                    placeholder="Enter Username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-sm"
                    type="password"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-lg bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <textarea
                    className="w-full bg-transparent focus:outline-none px-2 text-sm resize-none"
                    placeholder="Street Address"
                    rows={2}
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-sm"
                    placeholder="Enter City Name"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-sm"
                    placeholder="Enter Store Name"
                    value={formData.store}
                    onChange={(e) =>
                      setFormData({ ...formData, store: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-sm"
                    placeholder="Enter Zipcode"
                    value={formData.zipcode}
                    onChange={(e) =>
                      setFormData({ ...formData, zipcode: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-sm appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    placeholder="Mobile Number"
                    type="number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                </div>
              </div>

              {error && <span className="text-red-500 text-xs">{error}</span>}

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      agreeToTerms: checked as boolean,
                    })
                  }
                />
                <label htmlFor="terms" className="text-xs">
                  I agree with terms and Conditions
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0e746b] text-white hover:bg-[#0d846c] rounded-full py-5"
              >
                REGISTER
              </Button>

              <p className="text-center text-xs mt-2">
                Already have an Account?{" "}
                <Link to="/" className="text-[#0e746b] hover:underline">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      ) : (
        // Desktop layout
        <div className="w-full max-w-4xl rounded-3xl overflow-hidden flex shadow-xl mb-8">
          {/* Left side - Green section */}
          <div className="w-1/3 bg-[#0e746b] text-white p-8 flex flex-col relative">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img src="../logo.png" alt="L" />
              </div>
              <span className="text-xl font-medium">SendMoney</span>
            </div>

            <h1 className="text-3xl font-bold mb-4">Join Us!</h1>
            <p className="text-sm mb-1">To become part of our community</p>
            <p className="text-sm mb-8">please create your account</p>
            <div className="border border-white rounded-full py-2 px-4 mt-auto mb-4 text-sm hover:bg-[#0d846c] hover:text-white transition-colors flex justify-center w-full">
              <Link className="w-full flex justify-center" to="/">
                LOGIN
              </Link>
            </div>

            <div className="text-xs mt-auto">
              {" "}
              <span>SEND MONEY | ANYTIME | ANYWHERE</span>
            </div>
          </div>

          {/* Right side - White section */}
          <div className="w-2/3 bg-white p-8 flex flex-col">
            <h2 className="text-3xl font-bold text-[#0e746b] mb-1 text-center">
              Register
            </h2>
            <p className="text-sm text-center mb-6">
              Create your account to get started
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-[15px]"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-[15px]"
                    placeholder="Middle Name"
                    value={formData.middleName}
                    onChange={(e) =>
                      setFormData({ ...formData, middleName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-[15px]"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-[15px]"
                    type="date"
                    placeholder="DOB"
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-[15px]"
                    placeholder="Enter Username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-[15px]"
                    type="password"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="rounded-lg bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                <textarea
                  className="w-full bg-transparent focus:outline-none px-2 resize-none text-[15px]"
                  placeholder="Street Address"
                  rows={2}
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-[15px]"
                    placeholder="Enter City Name"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-[15px]"
                    placeholder="Enter Store Name"
                    value={formData.store}
                    onChange={(e) =>
                      setFormData({ ...formData, store: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full bg-transparent focus:outline-none px-2 text-[15px]"
                    placeholder="Enter Zipcode"
                    value={formData.zipcode}
                    onChange={(e) =>
                      setFormData({ ...formData, zipcode: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-full bg-emerald-50 p-2.5 w-full border border-[#0e746b]">
                  <input
                    className="w-full text-[15px] bg-transparent focus:outline-none px-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    placeholder="Mobile Number"
                    type="number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                </div>
              </div>

              {error && <span className="text-red-500 text-xs">{error}</span>}

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      agreeToTerms: checked as boolean,
                    })
                  }
                />
                <label htmlFor="terms" className="text-sm">
                  I agree with terms and Conditions
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0e746b] text-white hover:bg-[#0d846c] rounded-full py-5"
              >
                REGISTER
              </Button>

              <p className="text-center text-sm mt-2">
                Already have an Account?{" "}
                <Link to="/" className="text-[#0e746b] hover:underline">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
