import { motion } from "framer-motion";

const Form = () => {
  const clients = [
    {
      name: "Client Name 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name 5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name 6",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name 7",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
  ];

  return (
    <div>
      <main className="container min-h-screen mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row gap-4 items-start bg-slate-100 p-3 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }} // Apply scaling effect on hover
              transition={{ duration: 0.3 }} // Smooth transition
            >
              <motion.div
                className="w-full sm:w-40 h-25 relative rounded-lg overflow-hidden"
                whileHover={{ scale: 1.1 }} // Zoom in the image on hover
                transition={{ duration: 0.2 }}
              >
                <img
                  src={client.image || "/placeholder.svg"}
                  alt={`${client.name} Testimonial`}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <div className="flex-1">
                <h2 className=" font-bold mb-2">{client.name}</h2>
                <hr />
                <p className="text-gray-600 text-sm mt-2 font-arial">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Form;
