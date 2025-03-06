import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
// import { Info } from "lucide-react";

export default function Form() {
  const navigate = useNavigate();
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

  const handleSubmit = (e: React.FormEvent) => {
    // Handle registration logic here
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
    <div className="w-full max-w-[800px] mx-auto">
      <div className="bg-white border-slate-600 border-2 rounded-xl p-6 relative my-5 mx-1 ">
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
        <h1 className="text-xl font-bold mb-6">Create an Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              className=" border rounded-lg border-slate-700 focus:outline-none focus:border-transparent"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <Input
              className=" border rounded-lg border-slate-700 focus:outline-none focus:border-transparent"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={(e) =>
                setFormData({ ...formData, middleName: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              className=" border rounded-lg border-slate-700 focus:outline-none focus:border-transparent"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <Input
              className=" border rounded-lg border-slate-700 focus:outline-none focus:border-transparent px-1"
              type="date"
              placeholder="DOB"
              value={formData.dob}
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              className=" border rounded-lg border-slate-700 focus:outline-none focus:border-transparent"
              placeholder="Enter Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <div className="relative">
              <Input
                className=" border rounded-lg border-slate-700 focus:outline-none focus:border-transparent "
                type="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {/* <Info className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" /> */}
            </div>
          </div>
          <Textarea
            className=" border rounded-lg border-slate-700 resize-none focus:outline-none focus:border-transparent"
            placeholder="Street Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              className=" border rounded-lg border-slate-700 focus:outline-none focus:border-transparent"
              placeholder="Enter City Name"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            <Input
              className=" border rounded-lg border-slate-700 focus:outline-none focus:border-transparent"
              placeholder="Enter Store Name"
              value={formData.store}
              onChange={(e) =>
                setFormData({ ...formData, store: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              className=" border rounded-lg border-slate-700 focus:outline-none focus:border-transparent"
              placeholder="Enter Zipcode"
              value={formData.zipcode}
              onChange={(e) =>
                setFormData({ ...formData, zipcode: e.target.value })
              }
            />
            <Input
              className=" border rounded-lg border-slate-700 focus:outline-none focus:border-transparent"
              placeholder="Mobile Number"
              type="number"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
          </div>
          {error && <span className="text-red-500 text-xs">{error}</span>}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, agreeToTerms: checked as boolean })
              }
            />
            <label htmlFor="terms" className="text-sm">
              I agree with terms and Conditions
            </label>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#b3ffff] text-black hover:bg-[#99ffff]"
          >
            Register
          </Button>
          <p className="text-center text-sm">
            Already have an Account?{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
