import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowRight,
  Copy,
  Download,
  RefreshCw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

interface TransactionDetails {
  id: string;
  status: "completed" | "pending" | "failed";
  amount: number;
  fee: number;
  date: string;
  sender: {
    name: string;
    country: string;
  };
  receiver: {
    name: string;
    country: string;
    accountNumber?: string;
  };
  type: "vip" | "scholarship";
  paymentMethod: string;
}

const TrackTransferPage = () => {
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transaction, setTransaction] = useState<TransactionDetails | null>(
    null
  );
  const [savedTransactions, setSavedTransactions] = useState<
    Record<string, TransactionDetails>
  >({});
  const { toast } = useToast();

  // Load saved transactions from localStorage on component mount
  useEffect(() => {
    try {
      const storedTransactions = localStorage.getItem("transactions");
      if (storedTransactions) {
        setSavedTransactions(JSON.parse(storedTransactions));
      }
    } catch (error) {
      console.error("Error loading transactions from localStorage:", error);
    }
  }, []);

  // Mock transaction data as fallback
  const mockTransactions: Record<string, TransactionDetails> = {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setTransaction(null);

    if (!reference) {
      setError("Please enter a reference number");
      return;
    }

    if (!/^\d{10}$/.test(reference)) {
      setError("Please enter a valid 10-digit reference number");
      return;
    }

    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      // First check localStorage for real transactions
      const allTransactions = { ...mockTransactions, ...savedTransactions };
      const foundTransaction = allTransactions[reference];

      if (foundTransaction) {
        setTransaction(foundTransaction);
        toast({
          title: "Transaction found",
          description: `Details for transaction ${reference} have been retrieved.`,
        });
      } else {
        setError("No transaction found with this reference number");
      }

      setIsLoading(false);
    }, 1500);
  };

  const copyReferenceToClipboard = () => {
    if (transaction) {
      navigator.clipboard.writeText(transaction.id);
      toast({
        alert: "Reference copied",
        description: "Transaction reference has been copied to clipboard",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case "failed":
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-emerald-800">
              Track Your Transfer
            </h1>
            <p className="text-emerald-600 mt-2">
              Enter your 10-digit reference number to check the status of your
              transfer
            </p>
          </div>

          <Card className="border-none shadow-lg overflow-hidden mb-8">
            <CardHeader className="bg-[#0e746b] text-white">
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Track Transfer
              </CardTitle>
              <CardDescription className="text-emerald-100">
                Enter the reference number provided when you sent money
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
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
                      className="pl-10 border-emerald-200 focus:ring-emerald-500"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-600" />
                  </div>
                  {error && <p className="text-sm text-red-500">{error}</p>}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0e746b] hover:bg-emerald-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      Track Transfer <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {isLoading && (
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-1/3" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                  <Skeleton className="h-32 w-full" />
                </div>
              </CardContent>
            </Card>
          )}

          {transaction && !isLoading && (
            <Card className="border-none shadow-lg overflow-hidden">
              <CardHeader
                className={`${
                  transaction.type === "vip" ? "bg-[#0e746b]" : "bg-blue-600"
                } text-white`}
              >
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    {getStatusIcon(transaction.status)}
                    Transfer Details
                  </CardTitle>
                  <Badge
                    className={`${getStatusColor(
                      transaction.status
                    )} capitalize`}
                  >
                    {transaction.status}
                  </Badge>
                </div>
                <CardDescription
                  className={`${
                    transaction.type === "vip"
                      ? "text-emerald-100"
                      : "text-blue-100"
                  }`}
                >
                  Reference: {transaction.id}
                  <button
                    onClick={copyReferenceToClipboard}
                    className="ml-2 inline-flex items-center hover:text-white"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                      className={`p-4 rounded-lg ${
                        transaction.type === "vip"
                          ? "bg-emerald-50 border border-emerald-100"
                          : "bg-blue-50 border border-blue-100"
                      }`}
                    >
                      <h3
                        className={`text-sm font-medium mb-3 ${
                          transaction.type === "vip"
                            ? "text-emerald-800"
                            : "text-blue-800"
                        }`}
                      >
                        Sender Information
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-500 text-sm">Name:</span>
                          <span className="font-medium text-sm">
                            {transaction.sender.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 text-sm">
                            Country:
                          </span>
                          <span className="font-medium text-sm">
                            {transaction.sender.country}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`p-4 rounded-lg ${
                        transaction.type === "vip"
                          ? "bg-emerald-50 border border-emerald-100"
                          : "bg-blue-50 border border-blue-100"
                      }`}
                    >
                      <h3
                        className={`text-sm font-medium mb-3 ${
                          transaction.type === "vip"
                            ? "text-emerald-800"
                            : "text-blue-800"
                        }`}
                      >
                        Receiver Information
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-500 text-sm">Name:</span>
                          <span className="font-medium text-sm">
                            {transaction.receiver.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 text-sm">
                            Country:
                          </span>
                          <span className="font-medium text-sm">
                            {transaction.receiver.country}
                          </span>
                        </div>
                        {transaction.receiver.accountNumber && (
                          <div className="flex justify-between">
                            <span className="text-gray-500 text-sm">
                              Account:
                            </span>
                            <span className="font-medium text-sm">
                              {transaction.receiver.accountNumber}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-lg ${
                      transaction.type === "vip"
                        ? "bg-emerald-50 border border-emerald-100"
                        : "bg-blue-50 border border-blue-100"
                    }`}
                  >
                    <h3
                      className={`text-sm font-medium mb-3 ${
                        transaction.type === "vip"
                          ? "text-emerald-800"
                          : "text-blue-800"
                      }`}
                    >
                      Transaction Details
                    </h3>
                    <div className="grid grid-cols-2 gap-x-7 gap-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-sm">Amount:</span>
                        <span className="font-medium text-sm">
                          ${transaction.amount.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-sm">Fee:</span>
                        <span className="font-medium text-sm">
                          ${transaction.fee.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-sm">Total:</span>
                        <span className="font-medium text-sm">
                          ${(transaction.amount + transaction.fee).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-sm">Date:</span>
                        <span className="font-medium text-sm">
                          {transaction.date}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-sm">Type:</span>
                        <span className="font-medium text-sm capitalize">
                          {transaction.type}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-sm">
                          Payment Method:
                        </span>
                        <span className="font-medium text-sm capitalize">
                          {transaction.paymentMethod}
                        </span>
                      </div>
                    </div>
                  </div>

                  {transaction.status === "pending" && (
                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-sm">
                      <p className="text-yellow-800 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>
                          Your transfer is being processed. It typically takes
                          1-2 business days to complete.
                        </span>
                      </p>
                    </div>
                  )}

                  {transaction.status === "failed" && (
                    <div className="bg-red-50 p-3 rounded-lg border border-red-100 text-sm">
                      <p className="text-red-800 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        <span>
                          Your transfer could not be completed. Please contact
                          customer support for assistance.
                        </span>
                      </p>
                    </div>
                  )}

                  {transaction.status === "completed" && (
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-sm">
                      <p className="text-green-800 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span>
                          Your transfer has been successfully completed and the
                          funds are available to the recipient.
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 px-6 py-4 flex justify-between">
                <Button variant="outline" onClick={() => setTransaction(null)}>
                  Track Another
                </Button>
                <Button
                  className={`${
                    transaction.type === "vip"
                      ? "bg-[#0e746b] hover:bg-white hover:text-[#0e746b] border duration-300"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white`}
                >
                  <Download className="mr-2 h-4 w-4" /> Download Receipt
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Help Section */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">
              Need Help?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <h4 className="font-medium text-emerald-800 mb-2">
                  Can't find your transfer?
                </h4>
                <p className="text-sm text-gray-600 text-justify">
                  Make sure you're entering the correct 10-digit reference
                  number provided when you sent the money.
                </p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <h4 className="font-medium text-emerald-800 mb-2">
                  Contact Support
                </h4>
                <p className="text-sm text-gray-600 text-justify">
                  If you're having trouble tracking your transfer, please
                  contact our customer support team at support@example.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackTransferPage;
