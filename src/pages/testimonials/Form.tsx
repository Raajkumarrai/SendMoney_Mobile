const Form = () => {
  const clients = [
    {
      name: "Client Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
    {
      name: "Client Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "./money.png?height=300&width=400",
    },
  ];
  return (
    <div>
      <main className="container min-h-screen mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 items-start  bg-slate-100 p-4 rounded-lg"
            >
              <div className="w-full sm:w-48 h-48 relative rounded-lg overflow-hidden">
                <img
                  src={client.image || "/placeholder.svg"}
                  alt={`${client.name} Testimonial`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{client.name}</h2>
                <p className="text-gray-600">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Form;
