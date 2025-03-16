import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  CreditCard,
  ShieldCheck,
  Users,
  CheckCircle,
  DollarSign,
  ArrowRight,
  Globe,
  Send,
  HelpCircle,
} from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const navigate = useNavigate();

  const sendMoney = () => {
    navigate("/sendMoney");
  };

  return (
    <div className="min-h-screen bg-[#E6FFFC]">
      {/* Hero Section with Background Image */}
      <section className="relative px-4 py-20 text-center md:py-32 overflow-hidden">
        <div className="absolute bg-black inset-0 z-0">
          <img
            src="../world-image.png"
            alt="World map background"
            className="w-full h-full object-cover opacity-[0.3]"
          />
        </div>
        <div className="relative z-50 max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-semibold max-w-[700px] text-center mx-auto tracking-tighter text-white sm:text-4xl md:text-5xl">
            Transfer Money Around The World,
            <br />
            Fast and Easily
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl lg:text-base  xl:text-xl/relaxed">
            Send money to your loved ones securely and instantly with our global
            money transfer service. Lower fees, better exchange rates, and
            faster delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={sendMoney}
              className="bg-[#0e746b] hover:bg-[#2f857d] text-white duration-300 transition flex items-center"
              size="lg"
            >
              Send Money Now
              <Send size={16} />
            </Button>
            <Button
              onClick={handleClick}
              variant="outline"
              size="lg"
              className="border-[#00B8A9] text-black hover:bg-[#3b9292] hover:text-white transition duration-500"
            >
              How It Works
              <HelpCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Fast Transfer Section */}
      <section className="px-4 py-12 md:py-16 bg-[#e2f7f5] ">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <h2 className="text-2xl font-bold">
                Send Money Anytime, Anywhere in Minutes
              </h2>
              <p className="text-gray-600">
                Our global network ensures your money reaches its destination
                quickly and securely. Whether you're supporting family back home
                or paying for services abroad, we've got you covered.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00B8A9]" />
                  <span>
                    Transfers to bank accounts, mobile wallets, and cash pickup
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00B8A9]" />
                  <span>Real-time tracking of your money transfer</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00B8A9]" />
                  <span>Instant notifications when money is received</span>
                </li>
              </ul>
              <Button
                className="bg-[#0e746b] hover:bg-[#3b9292] text-white transition duration-300 mt-4"
                onClick={sendMoney}
              >
                Send Money Now
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="../logo.png"
                alt="Fast money transfer illustration"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div>
        {/* How It Works Section */}
        <section ref={contentRef} className="px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-24 h-24 rounded-full bg-[#E6FFFC] flex items-center justify-center">
                  <DollarSign className="w-10 h-10 text-[#00B8A9]" />
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <ArrowRight className="w-8 h-8 text-[#00B8A9] absolute top-[-13px] right-[-150px]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">1. Enter Amount</h3>
                <p className="text-gray-500">
                  Choose how much you want to send and see our competitive
                  exchange rates and low fees upfront
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-24 h-24 rounded-full bg-[#E6FFFC] flex items-center justify-center">
                  <Globe className="w-10 h-10 text-[#00B8A9]" />
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <ArrowRight className="w-8 h-8 text-[#00B8A9] absolute top-[-13px] right-[-150px]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">2. Select Destination</h3>
                <p className="text-gray-500">
                  Choose from 150+ countries worldwide and select the
                  recipient's preferred payout method
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-24 h-24 rounded-full bg-[#E6FFFC] flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-[#00B8A9]" />
                </div>
                <h3 className="text-xl font-semibold">3. Send & Track</h3>
                <p className="text-gray-500">
                  Complete your payment and track your transfer in real-time
                  until it reaches your recipient
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button
                onClick={sendMoney}
                className="bg-[#0e746b] hover:bg-[#3b9292] text-white duration-300 transition"
              >
                Start Your Transfer
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="px-4 py-8 md:py-12 lg:py-16 bg-[#e2f7f5]">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>
        <p className="text-center mb-12 text-gray-500 max-w-2xl mx-auto">
          Simple and easy solution for transferring money safely and faster
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

      {/* Global Coverage Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Global Coverage</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Send money to over 150 countries worldwide with competitive exchange
            rates
          </p>
          <div className="relative h-[300px] md:h-[400px] mb-8">
            <img
              src="../moneytransfer.jpg"
              alt="World map showing coverage"
              className="w-full h-full object-contain"
            />
            {/* Add some animated dots for popular corridors */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#e2f7f5] rounded-full animate-ping"></div>
            <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-[#e2f7f5] rounded-full animate-ping animation-delay-300"></div>
            <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-[#e2f7f5] rounded-full animate-ping animation-delay-600"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-[#e2f7f5] rounded-lg">
              <h3 className="font-semibold">Asia</h3>
              <p className="text-sm text-gray-500">Nepal, Philippines, China</p>
            </div>
            <div className="p-4 bg-[#e2f7f5] rounded-lg">
              <h3 className="font-semibold">North America</h3>
              <p className="text-sm text-gray-500">USA, Canada, Mexico</p>
            </div>
            <div className="p-4 bg-[#e2f7f5] rounded-lg">
              <h3 className="font-semibold">Europe</h3>
              <p className="text-sm text-gray-500">
                UK, France, Germany, Spain
              </p>
            </div>

            <div className="p-4 bg-[#e2f7f5] rounded-lg">
              <h3 className="font-semibold">Africa</h3>
              <p className="text-sm text-gray-500">Nigeria, Kenya, Ghana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Download Our Mobile App</h2>
              <p className="text-gray-600">
                Send money on the go with our easy-to-use mobile app. Track
                transfers, manage recipients, and get instant notifications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00B8A9]" />
                  <span>Send money with just a few taps</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00B8A9]" />
                  <span>Biometric authentication for enhanced security</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00B8A9]" />
                  <span>Save recipient details for faster transfers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00B8A9]" />
                  <span>Real-time transfer tracking</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                    <path d="M16 3v4"></path>
                    <path d="M8 3v4"></path>
                    <path d="M3 11h18"></path>
                    <path d="M19 16v6"></path>
                    <path d="M22 19l-3-3-3 3"></path>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="../money.png"
                  alt="Mobile app screenshot"
                  className="max-w-full h-auto rounded-3xl shadow-xl border-7 border-black"
                />
                <div className="absolute -right-12 -bottom-8 transform rotate-6">
                  <img
                    src="../logo.png"
                    alt="Second mobile app screenshot"
                    className="max-w-[200px] h-auto rounded-3xl shadow-xl border-5 border-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 bg-[#e2f7f5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  How long does it take for the money to arrive?
                </h3>
                <p className="text-gray-600">
                  Most transfers are completed within minutes, depending on the
                  destination country and payout method. Bank transfers may take
                  1-2 business days in some countries.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  What information do I need to send money?
                </h3>
                <p className="text-gray-600">
                  You'll need your recipient's full name as it appears on their
                  ID, their contact information, and depending on the payout
                  method, their bank account details or mobile wallet
                  information.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Are there any limits on how much I can send?
                </h3>
                <p className="text-gray-600">
                  Transfer limits vary by country and may depend on your
                  verification level. Basic accounts can typically send up to
                  $3,000 per transaction, while fully verified accounts have
                  higher limits.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  How secure is your service?
                </h3>
                <p className="text-gray-600">
                  We use bank-level encryption and security measures to protect
                  your data and transactions. All transfers are monitored for
                  fraud, and we comply with international regulations to ensure
                  safe money transfers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-[#e2f7f5]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Ready to Send Money?</h2>
          <p className="text-xl">
            Join millions of satisfied customers who trust us for their
            international money transfers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={sendMoney}
              className="bg-white text-[#00B8A9] hover:bg-[#0e746b] hover:text-white transition duration-500"
              size="lg"
            >
              Send Money Now
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              variant="outline"
              className="border-white text-slate-600 hover:bg-[#0e746b] hover:text-white transition duration-500"
              size="lg"
            >
              Create Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
