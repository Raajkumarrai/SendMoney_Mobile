"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  CreditCard,
  DollarSign,
  Globe,
  MapPin,
  Phone,
  Send,
  User,
  Wallet,
  AlertCircle,
} from "lucide-react";
import React, { useState } from "react";
import { SuccessModal } from "../success/SuccessModel";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SendMoneyPage() {
  const [receiverMoney, setReceiverMoney] = useState("vip");
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState("account");
  const [currentStep, setCurrentStep] = React.useState(1);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [formData, setFormData] = React.useState({
    senderCountry: "",
    receiverCountry: "",
    mobileNumber: "",
    amount: "",
    accountNumber: "",
    swiftCode: "",
    receiverAddress: "",
    receiverState: "",
    receiverCity: "",
    receiverContact: "",
    receiverAccountNumber: "",
    receiverSwiftCode: "",
    receiverName: "",
  });

  // for country Selection
  const [countries] = useState<string[]>([
    "United States",
    "Canada",
    "United Kingdom",
    "Congo",
    "Nepal",
  ]);
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [formDataa, setFormDataa] = useState({
    receiverCountry: formData.receiverCountry,
    receiverState: formData.receiverState,
    receiverCity: formData.receiverCity,
    receiverContact: formData.receiverContact,
  });

  const [errorss] = useState({
    receiverCity: "",
    receiverContact: "",
  });

  const handleCountryChange = (country: string) => {
    handleInputChange("receiverCountry", country);
    setFormDataa((prev) => ({ ...prev, receiverCountry: country }));
    setStates([]);
    setCities([]);
    // Logic to fetch states based on country
    if (country === "United States") {
      setStates(["New York", "California", "Texas", "Florida"]);
    } else if (country === "Canada") {
      setStates(["Ontario", "Quebec", "British Columbia"]);
    } else if (country === "United Kingdom") {
      setStates(["England", "Scotland", "Wales"]);
    } else if (country === "Nepal") {
      setStates([
        "Province 1",
        "Province 2",
        "Bagmati",
        "Gandaki",
        "Lumbini",
        "Karnali",
        "Sudurpashchim",
      ]);
    }
    // Clear cities when country changes
    setCities([]);
  };

  const handleStateChange = (state: string) => {
    handleInputChange("receiverState", state);
    setFormDataa((prev) => ({ ...prev, receiverState: state }));
    // Logic to fetch cities based on selected state
    if (state === "New York") {
      setCities(["New York City", "Buffalo", "Rochester"]);
    } else if (state === "California") {
      setCities(["Los Angeles", "San Francisco", "San Diego"]);
    } else if (state === "Texas") {
      setCities(["Houston", "Dallas", "Austin"]);
    } else if (state === "Province 1") {
      setCities(["Ilam", "Jhapa", "Sunsari"]);
    } else if (state === "Bagmati") {
      setCities(["Kathmandu", "Bhaktapur", "Lalitpur"]);
    } else if (state === "Gandaki") {
      setCities(["Pokhara", "Kaski", "Gandaki"]);
    }
    // Clear city selection when state changes
    setFormDataa((prev) => ({ ...prev, receiverCity: "" }));
    handleInputChange("receiverCity", "");
  };

  // Generate a consistent 10-digit reference number
  const generateReferenceNumber = () => {
    // Create a timestamp-based prefix (4 digits)
    const timestamp = Date.now().toString().slice(-4);

    // Create a random 6-digit number for the rest
    const randomPart = Math.floor(100000 + Math.random() * 900000);

    // Combine to create a 10-digit reference
    return `${timestamp}${randomPart}`;
  };

  const [referenceNumber] = React.useState(generateReferenceNumber());

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    // Clear error for this field when user types
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: "",
      });
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.senderCountry) {
      newErrors.senderCountry = "Sender country is required";
    }

    if (!formData.receiverCountry) {
      newErrors.receiverCountry = "Receiver country is required";
    }

    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10,15}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid mobile number";
    }

    if (!formData.amount) {
      newErrors.amount = "Amount is required";
    } else if (Number.parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (paymentMethod === "account") {
      if (!formData.accountNumber) {
        newErrors.accountNumber = "Account number is required";
      }

      if (!formData.swiftCode) {
        newErrors.swiftCode = "Swift code is required";
      }
    } else if (paymentMethod === "cash") {
      if (!formData.receiverAddress) {
        newErrors.receiverAddress = "Receiver address is required";
      }

      if (!formData.receiverCity) {
        newErrors.receiverCity = "Receiver city is required";
      }

      if (!formData.receiverContact) {
        newErrors.receiverContact = "Receiver contact is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.receiverName) {
      newErrors.receiverName = "Receiver name is required";
    }

    if (!formData.receiverAccountNumber) {
      newErrors.receiverAccountNumber = "Receiver account number is required";
    }

    if (!formData.receiverSwiftCode) {
      newErrors.receiverSwiftCode = "Receiver swift code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateStep3()) {
      // Save transaction to localStorage for tracking
      const transaction = {
        id: referenceNumber,
        status: "completed",
        amount: Number.parseFloat(formData.amount || "0"),
        fee: 0.99,
        date: new Date().toLocaleString(),
        sender: {
          name: "You",
          country: formData.senderCountry,
        },
        receiver: {
          name: formData.receiverName,
          country: formData.receiverCountry,
          accountNumber: `•••• ${formData.receiverAccountNumber.slice(-4)}`,
        },
        type: receiverMoney,
        paymentMethod: paymentMethod,
      };

      // Get existing transactions or initialize empty array
      const existingTransactions = JSON.parse(
        localStorage.getItem("transactions") || "{}"
      );

      // Add new transaction
      existingTransactions[referenceNumber] = transaction;

      // Save back to localStorage
      localStorage.setItem(
        "transactions",
        JSON.stringify(existingTransactions)
      );

      setShowSuccess(true);
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Calculate transaction data from form inputs
  const transactionData = {
    transferAmount: formData.amount ? Number.parseFloat(formData.amount) : 0,
    transferFee: 0.99,
    totalToReceive: formData.amount ? Number.parseFloat(formData.amount) : 0,
    transactionId: referenceNumber,
    receiverName: formData.receiverName,
    receiverAccountNumber: formData.receiverAccountNumber,
    receiverCountry: formData.receiverCountry,
    receiverCity: formData.receiverCity,
    receiverContact: formData.receiverContact,
    senderCountry: formData.senderCountry,
    paymentMethod: paymentMethod,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-emerald-800">
              Send Money Globally
            </h1>
            <p className="text-emerald-600 mt-2">
              Fast, secure, and affordable money transfers
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div
                className={`flex flex-col items-center ${
                  currentStep >= 1 ? "text-emerald-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    currentStep >= 1
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <Globe className="h-5 w-5" />
                </div>
                <span className="text-xs">Details</span>
              </div>
              <div
                className={`h-1 flex-1 mx-2 ${
                  currentStep >= 2 ? "bg-emerald-600" : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`flex flex-col items-center ${
                  currentStep >= 2 ? "text-emerald-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    currentStep >= 2
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <Wallet className="h-5 w-5" />
                </div>
                <span className="text-xs">Payment</span>
              </div>
              <div
                className={`h-1 flex-1 mx-2 ${
                  currentStep >= 3 ? "bg-emerald-600" : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`flex flex-col items-center ${
                  currentStep >= 3 ? "text-emerald-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    currentStep >= 3
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <User className="h-5 w-5" />
                </div>
                <span className="text-xs">Receiver</span>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Transfer Details */}
                {currentStep === 1 && (
                  <div className="p-6 space-y-6">
                    <div className="flex items-center gap-2 text-emerald-700 mb-4">
                      <Globe className="h-5 w-5" />
                      <h2 className="text-xl font-semibold">
                        Transfer Details
                      </h2>
                    </div>

                    {Object.keys(errors).length > 0 && (
                      <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Please fix the errors below to continue.
                        </AlertDescription>
                      </Alert>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="select-country"
                          className="text-emerald-700"
                        >
                          From Country
                        </Label>
                        <div className="relative">
                          <Select
                            onValueChange={(value) =>
                              handleInputChange("senderCountry", value)
                            }
                            value={formData.senderCountry}
                          >
                            <SelectTrigger
                              id="select-country"
                              className={`pl-10 border-emerald-200 focus:ring-emerald-500 ${
                                errors.senderCountry ? "border-red-500" : ""
                              }`}
                            >
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Nepal">Nepal</SelectItem>
                              <SelectItem value="United Kingdom">
                                United Kingdom
                              </SelectItem>
                              <SelectItem value="United States">
                                United States
                              </SelectItem>
                              <SelectItem value="India">India</SelectItem>
                            </SelectContent>
                          </Select>
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-600" />
                        </div>
                        {errors.senderCountry && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.senderCountry}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="receiver-country"
                          className="text-emerald-700"
                        >
                          To Country
                        </Label>
                        <div className="relative">
                          <Select
                            onValueChange={(value) =>
                              handleInputChange("receiverCountry", value)
                            }
                            value={formData.receiverCountry}
                          >
                            <SelectTrigger
                              id="receiver-country"
                              className={`pl-10 border-emerald-200 focus:ring-emerald-500 ${
                                errors.receiverCountry ? "border-red-500" : ""
                              }`}
                            >
                              <SelectValue placeholder="Select receiver country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Nepal">Nepal</SelectItem>
                              <SelectItem value="United Kingdom">
                                United Kingdom
                              </SelectItem>
                              <SelectItem value="United States">
                                United States
                              </SelectItem>
                              <SelectItem value="India">India</SelectItem>
                              <SelectItem value="China">China</SelectItem>
                              <SelectItem value="Korea">Korea</SelectItem>
                              <SelectItem value="Russia">Russia</SelectItem>
                            </SelectContent>
                          </Select>
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-600" />
                        </div>
                        {errors.receiverCountry && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.receiverCountry}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mobile" className="text-emerald-700">
                          Mobile Number
                        </Label>
                        <div className="relative">
                          <Input
                            id="mobile"
                            type="tel"
                            placeholder="Enter mobile number"
                            className={`pl-10 border-emerald-200 focus:ring-emerald-500 ${
                              errors.mobileNumber ? "border-red-500" : ""
                            }`}
                            value={formData.mobileNumber}
                            onChange={(e) =>
                              handleInputChange("mobileNumber", e.target.value)
                            }
                          />
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-600" />
                        </div>
                        {errors.mobileNumber && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.mobileNumber}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="amount" className="text-emerald-700">
                          Amount
                        </Label>
                        <div className="relative">
                          <Input
                            id="amount"
                            type="number"
                            placeholder="Enter Amount"
                            min="0"
                            className={`pl-10 border-emerald-200 focus:ring-emerald-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${
                              errors.amount ? "border-red-500" : ""
                            }`}
                            value={formData.amount}
                            onChange={(e) => {
                              if (Number(e.target.value) < 0)
                                e.target.value = "0";
                              handleInputChange("amount", e.target.value);
                            }}
                          />
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-600" />
                        </div>
                        {errors.amount && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.amount}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-emerald-700">
                        How does your receiver want the money?
                      </Label>
                      <Select
                        value={receiverMoney}
                        onValueChange={(value) => {
                          setReceiverMoney(value);
                        }}
                      >
                        <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vip">VIP</SelectItem>
                          <SelectItem value="scholarship">
                            Scholarship
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button
                        type="button"
                        onClick={handleNextStep}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Payment Method */}
                {currentStep === 2 && (
                  <div className="p-6 space-y-6">
                    <div className="flex items-center gap-2 text-emerald-700 mb-4">
                      <Wallet className="h-5 w-5" />
                      <h2 className="text-xl font-semibold">Payment Method</h2>
                    </div>

                    {Object.keys(errors).length > 0 && (
                      <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Please fix the errors below to continue.
                        </AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-4">
                      <Label className="text-emerald-700">
                        How would you like to pay?
                      </Label>

                      <Tabs
                        defaultValue={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="w-full"
                      >
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                          <TabsTrigger
                            value="account"
                            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                          >
                            <CreditCard className="mr-2 h-4 w-4" />
                            Account Payment
                          </TabsTrigger>
                          <TabsTrigger
                            value="cash"
                            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                          >
                            <DollarSign className="mr-2 h-4 w-4" />
                            Cash Payment
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent
                          value="account"
                          className="space-y-4 border rounded-lg p-4 bg-emerald-50"
                        >
                          <div className="space-y-2">
                            <Label
                              htmlFor="account-number"
                              className="text-emerald-700"
                            >
                              Account Number
                            </Label>
                            <Input
                              id="account-number"
                              placeholder="Enter account number"
                              className={`border-emerald-200 focus:ring-emerald-500 ${
                                errors.accountNumber ? "border-red-500" : ""
                              }`}
                              value={formData.accountNumber}
                              onChange={(e) =>
                                handleInputChange(
                                  "accountNumber",
                                  e.target.value
                                )
                              }
                            />
                            {errors.accountNumber && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.accountNumber}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="swift" className="text-emerald-700">
                              Swift Code
                            </Label>
                            <Input
                              id="swift"
                              placeholder="Enter Swift code"
                              className={`border-emerald-200 focus:ring-emerald-500 ${
                                errors.swiftCode ? "border-red-500" : ""
                              }`}
                              value={formData.swiftCode}
                              onChange={(e) =>
                                handleInputChange("swiftCode", e.target.value)
                              }
                            />
                            {errors.swiftCode && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.swiftCode}
                              </p>
                            )}
                          </div>
                        </TabsContent>

                        <TabsContent
                          value="cash"
                          className="space-y-4 border rounded-lg p-4 bg-emerald-50"
                        >
                          <div className="space-y-2">
                            <Label
                              htmlFor="receiver-address"
                              className="text-emerald-700"
                            >
                              Receiver Address
                            </Label>
                            <Input
                              id="receiver-address"
                              placeholder="Receiver Address"
                              className={`border-emerald-200 focus:ring-emerald-500 ${
                                errors.receiverAddress ? "border-red-500" : ""
                              }`}
                              value={formData.receiverAddress}
                              onChange={(e) =>
                                handleInputChange(
                                  "receiverAddress",
                                  e.target.value
                                )
                              }
                            />
                            {errors.receiverAddress && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.receiverAddress}
                              </p>
                            )}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Country Select */}
                            <div className="space-y-2">
                              <Label
                                htmlFor="receiver-country-select"
                                className="text-emerald-700"
                              >
                                Receiver Country
                              </Label>
                              <Select
                                onValueChange={handleCountryChange}
                                value={formDataa.receiverCountry}
                              >
                                <SelectTrigger
                                  id="receiver-country-select"
                                  className="border-emerald-200 focus:ring-emerald-500"
                                >
                                  <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent>
                                  {countries.map((country) => (
                                    <SelectItem key={country} value={country}>
                                      {country}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            {/* State Select (Visible only when a country is selected) */}
                            {formDataa.receiverCountry && (
                              <div className="space-y-2">
                                <Label
                                  htmlFor="receiver-state"
                                  className="text-emerald-700"
                                >
                                  Receiver State
                                </Label>
                                <Select
                                  onValueChange={handleStateChange}
                                  value={formDataa.receiverState}
                                >
                                  <SelectTrigger
                                    id="receiver-state"
                                    className="border-emerald-200 focus:ring-emerald-500"
                                  >
                                    <SelectValue placeholder="Select state" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {states.map((state) => (
                                      <SelectItem key={state} value={state}>
                                        {state}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            )}

                            {/* City Select (Visible only when a state is selected) */}
                            {formDataa.receiverState && (
                              <div className="space-y-2">
                                <Label
                                  htmlFor="receiver-city"
                                  className="text-emerald-700"
                                >
                                  Receiver City
                                </Label>
                                <Select
                                  onValueChange={(value) => {
                                    handleInputChange("receiverCity", value);
                                    setFormDataa((prev) => ({
                                      ...prev,
                                      receiverCity: value,
                                    }));
                                  }}
                                  value={formData.receiverCity}
                                >
                                  <SelectTrigger
                                    id="receiver-city"
                                    className={`border-emerald-200 focus:ring-emerald-500 ${
                                      errors.receiverCity
                                        ? "border-red-500"
                                        : ""
                                    }`}
                                  >
                                    <SelectValue placeholder="Select city" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {cities.map((city) => (
                                      <SelectItem key={city} value={city}>
                                        {city}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                {errors.receiverCity && (
                                  <p className="text-red-500 text-xs mt-1">
                                    {errors.receiverCity}
                                  </p>
                                )}
                              </div>
                            )}

                            {/* Receiver Contact Input */}
                            <div className="space-y-2">
                              <Label
                                htmlFor="receiver-contact"
                                className="text-emerald-700"
                              >
                                Receiver Contact
                              </Label>
                              <Input
                                id="receiver-contact"
                                type="tel"
                                placeholder="Contact number"
                                className={`border-emerald-200 focus:ring-emerald-500 ${
                                  errorss.receiverContact
                                    ? "border-red-500"
                                    : ""
                                }`}
                                value={formData.receiverContact}
                                onChange={(e) =>
                                  handleInputChange(
                                    "receiverContact",
                                    e.target.value
                                  )
                                }
                              />
                              {errors.receiverContact && (
                                <p className="text-red-500 text-xs mt-1">
                                  {errorss.receiverContact}
                                </p>
                              )}
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button
                        type="button"
                        onClick={handlePrevStep}
                        variant="outline"
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={handleNextStep}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Receiver Information */}
                {currentStep === 3 && (
                  <div className="p-6 space-y-6">
                    <div className="flex items-center gap-2 text-emerald-700 mb-4">
                      <User className="h-5 w-5" />
                      <h2 className="text-xl font-semibold">
                        Receiver Information
                      </h2>
                    </div>

                    {Object.keys(errors).length > 0 && (
                      <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Please fix the errors below to complete your transfer.
                        </AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-4">
                      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100 mb-6">
                        <h3 className="font-medium text-emerald-800 mb-2">
                          Transfer Summary
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-emerald-700">Amount:</div>
                          <div className="font-medium">
                            ${formData.amount || "0.00"}
                          </div>
                          <div className="text-emerald-700">Fee:</div>
                          <div className="font-medium">$0.99</div>
                          <div className="text-emerald-700">Total:</div>
                          <div className="font-medium">
                            $
                            {formData.amount
                              ? (
                                  Number.parseFloat(formData.amount) + 0.99
                                ).toFixed(2)
                              : "0.99"}
                          </div>
                          <div className="text-emerald-700">
                            Delivery Method:
                          </div>
                          <div className="font-medium capitalize">
                            {receiverMoney}
                          </div>
                          <div className="text-emerald-700">
                            Payment Method:
                          </div>
                          <div className="font-medium capitalize">
                            {paymentMethod}
                          </div>
                          <div className="text-emerald-700">
                            Reference Number:
                          </div>
                          <div className="font-medium">{referenceNumber}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="receiver-account"
                          className="text-emerald-700"
                        >
                          Receiver Account Number
                        </Label>
                        <Input
                          id="receiver-account"
                          placeholder="Receiver account number"
                          className={`border-emerald-200 focus:ring-emerald-500 ${
                            errors.receiverAccountNumber ? "border-red-500" : ""
                          }`}
                          value={formData.receiverAccountNumber}
                          onChange={(e) =>
                            handleInputChange(
                              "receiverAccountNumber",
                              e.target.value
                            )
                          }
                        />
                        {errors.receiverAccountNumber && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.receiverAccountNumber}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="receiver-swift"
                          className="text-emerald-700"
                        >
                          Receiver Swift Code
                        </Label>
                        <Input
                          id="receiver-swift"
                          placeholder="Enter Swift code"
                          className={`border-emerald-200 focus:ring-emerald-500 ${
                            errors.receiverSwiftCode ? "border-red-500" : ""
                          }`}
                          value={formData.receiverSwiftCode}
                          onChange={(e) =>
                            handleInputChange(
                              "receiverSwiftCode",
                              e.target.value
                            )
                          }
                        />
                        {errors.receiverSwiftCode && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.receiverSwiftCode}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="receiver-name"
                          className="text-emerald-700"
                        >
                          Receiver Name
                        </Label>
                        <Input
                          id="receiver-name"
                          placeholder="Receiver name"
                          className={`border-emerald-200 focus:ring-emerald-500 ${
                            errors.receiverName ? "border-red-500" : ""
                          }`}
                          value={formData.receiverName}
                          onChange={(e) =>
                            handleInputChange("receiverName", e.target.value)
                          }
                        />
                        {errors.receiverName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.receiverName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button
                        type="button"
                        onClick={handlePrevStep}
                        variant="outline"
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        <Send className="mr-2 h-4 w-4" /> Complete Transfer
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Exchange Rate Information */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">
              Current Exchange Rates
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg text-center">
                <div className="text-sm text-emerald-600">USD → EUR</div>
                <div className="text-lg font-semibold">0.92</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg text-center">
                <div className="text-sm text-emerald-600">USD → GBP</div>
                <div className="text-lg font-semibold">0.79</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg text-center">
                <div className="text-sm text-emerald-600">USD → INR</div>
                <div className="text-lg font-semibold">83.12</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg text-center">
                <div className="text-sm text-emerald-600">USD → CNY</div>
                <div className="text-lg font-semibold">7.24</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <SuccessModal
          onClose={() => setShowSuccess(false)}
          transactionData={transactionData}
          variant={receiverMoney as "vip" | "scholarship"}
        />
      )}
    </div>
  );
}
