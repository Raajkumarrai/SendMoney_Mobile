import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Terminal } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lName: "",
    email: "",
    message: "",
    number: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lName: "",
    email: "",
    message: "",
    number: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = { name: "", lName: "", email: "", message: "", number: "" };

    if (!formData.name) newErrors.name = "First Name is required";
    if (!formData.lName) newErrors.lName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.number) newErrors.number = "Contact Number is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      setShowAlert(true);
      console.log("Form Submitted", formData);
      setFormData({ name: "", lName: "", email: "", message: "", number: "" });
      setTimeout(() => setShowAlert(false), 2000);
    }
  };

  return (
    <div>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Map */}
        <div className="w-full h-[200px] bg-white rounded-lg mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2844521450574!2d85.31429671506268!3d27.712861982790663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c1b3c89acd%3A0x6c2c78fe71177378!2sKathmandu%20Marriott%20Hotel!5e0!3m2!1sen!2s!4v1645523456789!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our location</h2>
          <p className="text-muted-foreground mb-6">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="space-y-2">
            <h3 className="font-semibold">Call us on</h3>
            <p>0123456789</p>
            <p>(222) 606 707 808 (FAX)</p>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="font-semibold">Send a Message</h3>
            <p>info@gmail.com</p>
            <p>admin@gmail.com</p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Send your Message</h2>
          <p className="text-muted-foreground mb-6">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  type="text"
                  placeholder="First Name*"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Last Name*"
                  value={formData.lName}
                  onChange={(e) =>
                    setFormData({ ...formData, lName: e.target.value })
                  }
                />
                {errors.lName && (
                  <p className="text-red-500 text-xs">{errors.lName}</p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Contact Number*"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                />
                {errors.number && (
                  <p className="text-red-500 text-xs">{errors.number}</p>
                )}
              </div>
            </div>
            <Textarea
              placeholder="Leave a Message"
              className="min-h-[150px] resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
            <Button
              type="submit"
              className="w-full md:w-auto bg-[#7ef1f1] text-black hover:bg-[#43caca]"
            >
              Send Message
            </Button>
            {showAlert && (
              <Alert className="absolute bg-sky-300 w-auto">
                <Terminal className="h-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Form submitted successfully.
                </AlertDescription>
              </Alert>
            )}
          </form>
        </section>
      </main>
    </div>
  );
};

export default Form;
