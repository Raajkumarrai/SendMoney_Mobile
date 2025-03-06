"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Client {
  name: string;
  description: string;
  image: string;
  location?: string;
}

export default function Form() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const clients: Client[] = [
    {
      name: "John Smith",
      location: "Nepal",
      description:
        "Using this mobile banking system has made sending money so convenient. The transactions are fast, secure, and hassle-free. I no longer have to visit banks for transfers!",
      image: "../money.png",
    },
    {
      name: "Sarah Johnson",
      location: "India",
      description:
        "This app has completely changed how I handle my payments. I can send money to my family instantly, pay bills, and even recharge my phone with just a few taps.",
      image: "../logo.png",
    },
    {
      name: "Michael Chen",
      location: "USA",
      description:
        "I travel frequently, and this banking system allows me to send money internationally without any complications. The exchange rates are great, and the process is smooth.",
      image: "../fast.png",
    },
    {
      name: "Emily Rodriguez",
      location: "Nepal",
      description:
        "I love how secure and efficient this mobile banking service is. My transactions are always processed quickly, and I get instant notifications for every transfer I make.",
      image: "../logo.png",
    },
  ];

  return (
    <div>
      <main className="container min-h-screen mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-10">
          Client Testimonials
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedClient(client)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <div className="relative">
                  {/* Yellow dots pattern background */}
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 opacity-50 z-0">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          "radial-gradient(#FCD34D 2px, transparent 2px)",
                        backgroundSize: "15px 15px",
                      }}
                    ></div>
                  </div>

                  <div className="p-6 relative z-10">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <p className="text-gray-700 mb-4 line-clamp-6">
                          {client.description}
                        </p>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="bg-[#7fc7c7] rounded-b-full pt-2 pb-6 px-6">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                            <img
                              src={client.image || "/placeholder.svg"}
                              alt={`${client.name} profile`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="text-center mt-2">
                          <h3 className="text-red-600 font-bold text-lg">
                            {client.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {client.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Red bottom border */}
                  <div className="h-1 bg-red-600 w-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            className=" fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClient(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                onClick={() => setSelectedClient(null)}
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Left Section: Image & Name */}
                <div className="md:w-1/3">
                  <div className="bg-[#7fc7c7] rounded-t-full pb-4 pt-2 px-6 flex justify-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                      <img
                        src={selectedClient.image || "/placeholder.svg"}
                        alt={selectedClient.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h2 className="text-red-600 font-bold text-xl">
                      {selectedClient.name}
                    </h2>
                    <p className="text-gray-600">{selectedClient.location}</p>
                  </div>
                </div>

                {/* Right Section: Scrollable Description */}
                <div className="md:w-2/3  p-4 rounded-lg shadow-md">
                  <div className="max-h-60 overflow-y-auto p-2">
                    <p className="text-gray-700 text-lg">
                      {selectedClient.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
