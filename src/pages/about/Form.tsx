import { Users, Target, Clock, Globe, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Form() {
  return (
    <div className="min-h-screen bg-[#E5F9F7]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Digital Finance
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Since 2020, we've been revolutionizing the way people handle money
            transfers, making it easier, faster, and more secure than ever
            before.
          </p>
          <Button size="lg" className="mb-12">
            Learn More
          </Button>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Mission Driven",
                description:
                  "Committed to financial inclusion and accessibility for all",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Customer First",
                description:
                  "Your success and satisfaction are our top priorities",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global Reach",
                description: "Connecting people across borders seamlessly",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Innovation",
                description: "Constantly evolving to serve you better",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 inline-block mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/5 py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10M+", label: "Active Users" },
              { number: "150+", label: "Countries Served" },
              { number: "99.9%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      {/* <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2  items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p>
                  Founded in 2020, our journey began with a simple mission: to
                  make financial services accessible to everyone. What started
                  as a small startup has grown into a global platform serving
                  millions.
                </p>
                <p>
                  We've built our reputation on trust, security, and innovation.
                  Our team of experts works tirelessly to develop cutting-edge
                  solutions that make money transfers as simple as sending a
                  text message.
                </p>
                <p>
                  Today, we're proud to be one of the leading financial
                  technology companies, but we're even more excited about what
                  the future holds. We continue to innovate and expand our
                  services to meet the evolving needs of our global community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+977 </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@sendmoney.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Business Street, Suite 100, City, Country</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
