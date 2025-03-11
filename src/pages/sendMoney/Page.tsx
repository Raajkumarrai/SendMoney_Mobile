import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { SuccessModal } from "../success/SuccessModel";

export default function Page() {
  const [receiverMoney, setReceiverMoney] = useState("vip");
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [successVariant, setSuccessVariant] = React.useState<
    "default" | "shop"
  >("default");
  const [paymentMethod, setPaymentMethod] = React.useState("account");
  // const [paymentOption, setPaymentOption] = React.useState();
  const [showReceiverInfo, setShowReceiverInfo] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessVariant(Math.random() > 0.5 ? "default" : "shop");
    setShowSuccess(true);
    console.log("Successfully submitted");
  };
  console.log(receiverMoney);

  const mockTransactionData = {
    transferAmount: 400.0,
    transferFee: 0.99,
    totalToReceive: 400.0,
    transactionId: "100505kvr3",
    shopAddress: "Lorem ipsum dolor sit amet consectetur...",
  };

  return (
    <div className="min-h-screen bg-[#E6FFFC]">
      {/* Main Form */}
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit}>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Send Money Online
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="select-country">Select Country</Label>
                  <Select>
                    <SelectTrigger id="select-country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="np">Nepal</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="id">India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="receiver-country">Receiver Country</Label>
                  <Select>
                    <SelectTrigger id="receiver-country">
                      <SelectValue placeholder="Select receiver country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="np">Nepal</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="id">India</SelectItem>
                      <SelectItem value="ch">China</SelectItem>
                      <SelectItem value="ko">Korea</SelectItem>
                      <SelectItem value="rs">Russia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile">Enter Mobile Number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter mobile number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Enter Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter Amount"
                    min="0"
                    className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    onChange={(e) => {
                      if (Number(e.target.value) < 0) e.target.value = "0";
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label>How does your receiver want the money?</Label>
                  <Select
                    value={receiverMoney}
                    onValueChange={(e: any) => {
                      setReceiverMoney(e);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vip">VIP</SelectItem>
                      <SelectItem value="scholarship">Scholarship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>How would you like to pay?</Label>
                  <RadioGroup
                    defaultValue="account"
                    onValueChange={setPaymentMethod}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="account" id="account" />
                      <Label htmlFor="account">Account Payment</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">By Cash</Label>
                    </div>
                  </RadioGroup>
                </div>

                {paymentMethod === "account" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="account-number">
                        Enter Account Number
                      </Label>
                      <Input
                        id="account-number"
                        placeholder="Enter account number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="swift">Enter Swift Code</Label>
                      <Input id="swift" placeholder="Enter Swift code" />
                    </div>
                  </div>
                )}
                {paymentMethod === "cash" && (
                  <Card className="max-w-md mx-auto mt-4">
                    <CardContent className="space-y-4 pt-6">
                      <div className="space-y-2">
                        <Label htmlFor="receiver-address">
                          Receiver Address
                        </Label>
                        <Input
                          id="receiver-address"
                          placeholder="Receiver Address"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="receiver-country-select">
                            Receiver Country
                          </Label>
                          <Select>
                            <SelectTrigger id="receiver-country-select">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                              <SelectItem value="co">Congo</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="receiver-state">Receiver State</Label>
                          <Select>
                            <SelectTrigger id="receiver-state">
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ny">New York</SelectItem>
                              <SelectItem value="ca">California</SelectItem>
                              <SelectItem value="ny">New York</SelectItem>
                              <SelectItem value="ca">California</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="receiver-city">Receiver City</Label>
                          <Select>
                            <SelectTrigger id="receiver-city">
                              <SelectValue placeholder="Select city" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="nyc">New York City</SelectItem>
                              <SelectItem value="la">Los Angeles</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="receiver-contact">
                            Receiver Contact Number
                          </Label>
                          <Input
                            id="receiver-contact"
                            type="tel"
                            placeholder="Contact number"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Button
                  className="w-full bg-[#CFFAFE] text-black hover:bg-[#BAE6FD]"
                  onClick={() => setShowReceiverInfo(true)}
                >
                  {!showReceiverInfo ? "Transfer Payment" : "Next"}
                </Button>

                {showReceiverInfo && (
                  <div className="space-y-4 pt-4">
                    <h3 className="font-semibold">Receiver Information</h3>
                    <hr />
                    <div className="space-y-2">
                      <Label htmlFor="receiver-account">
                        Receiver Account Number
                      </Label>
                      <Input
                        id="receiver-account"
                        placeholder="Receiver account number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="receiver-swift">Enter Swift Code</Label>
                      <Input
                        id="receiver-swift"
                        placeholder="Enter Swift code"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="receiver-name">Receiver Name</Label>
                      <Input id="receiver-name" placeholder="Receiver name" />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#CFFAFE] text-black hover:bg-[#BAE6FD]"
                    >
                      Transfer Payment
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </form>
      </main>
      {showSuccess && (
        <SuccessModal
          onClose={() => setShowSuccess(false)}
          transactionData={mockTransactionData}
          variant={successVariant}
        />
      )}
    </div>
  );
}
