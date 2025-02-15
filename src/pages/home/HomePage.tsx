import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, CreditCard, ShieldCheck, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const sendMoney = () => {
    navigate("/sendMoney");
  };
  return (
    <div className="min-h-screen bg-[#E6FFFC]">
      <section className="px-4 py-12 text-center md:py-16">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Transfer Money Around The World,
            <br />
            Fast and Easily
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Send money to your loved ones securely and instantly with our global
            money transfer service.
          </p>
          <Button
            onClick={sendMoney}
            className="bg-[#00B8A9] hover:bg-[#00A699] text-white"
            size="lg"
          >
            Send Money
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>
        <p className="text-center mb-12 text-gray-500 max-w-2xl mx-auto">
          Simple and easy solution for Transfer money safe and faster way
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <CreditCard className="w-8 h-8 mx-auto text-[#00B8A9]" />
              <h3 className="font-semibold">Instant Cashout</h3>
              <p className="text-sm text-gray-500">
                Get your money instantly with our fast processing system
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <Users className="w-8 h-8 mx-auto text-[#00B8A9]" />
              <h3 className="font-semibold">1.5m people trust us</h3>
              <p className="text-sm text-gray-500">
                Join our growing community of satisfied users
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <Clock className="w-8 h-8 mx-auto text-[#00B8A9]" />
              <h3 className="font-semibold">24/7 Service</h3>
              <p className="text-sm text-gray-500">
                We're here to help you anytime, day or night
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <ShieldCheck className="w-8 h-8 mx-auto text-[#00B8A9]" />
              <h3 className="font-semibold">Safe and Secure</h3>
              <p className="text-sm text-gray-500">
                Your money is protected with our advanced security
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fast Transfer Section */}
      <section className="px-4 py-8 md:py-12 bg-white grid">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Fast Transfer</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Send money anytime, anywhere in a Minute
              </h3>
              <p className="text-gray-500">
                Download Our App for The Fastest & Secure Way
              </p>
              <Button
                className="bg-[#00B8A9] hover:bg-[#00A699] text-white"
                onClick={sendMoney}
              >
                Send Money
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
