import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Form = () => {
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!reference) {
      setError("Please enter a reference number");
      return;
    }

    if (!/^\d{10}$/.test(reference)) {
      setError("Please enter a valid 10-digit reference number");
      return;
    }

    // Handle successful validation
    console.log("Reference number submitted:", reference);
  };
  return (
    <div>
      {" "}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-start min-h-screen ">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-8">
            Enter Reference Number
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 border rounded-lg"
          >
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter 10-digit reference number"
                value={reference}
                onChange={(e) => {
                  setReference(
                    e.target.value.replace(/[^\d]/g, "").slice(0, 10)
                  );
                  setError("");
                }}
                className="w-full"
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <Button
              type="submit"
              className="w-full bg-[#E5F9F7] hover:bg-[#d0f4f0] text-black"
            >
              Continue
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Form;
