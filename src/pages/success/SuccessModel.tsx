import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Award, GraduationCap, Copy, Printer, Download } from "lucide-react";

interface TransactionData {
  transferAmount: number;
  transferFee: number;
  totalToReceive: number;
  transactionId: string;
  receiverName?: string;
  receiverAccountNumber?: string;
  receiverCountry?: string;
  receiverCity?: string;
  receiverContact?: string;
  senderCountry?: string;
  paymentMethod?: string;
}

interface SuccessModalProps {
  onClose: () => void;
  transactionData: TransactionData;
  variant: "vip" | "scholarship";
}

export function SuccessModal({
  onClose,
  transactionData,
  variant,
}: SuccessModalProps) {
  const { toast } = useToast();

  const handleCopyTransactionId = () => {
    navigator.clipboard.writeText(transactionData.transactionId);
    toast({
      title: "Transaction ID copied",
      description: "Transaction ID has been copied to clipboard",
    });
  };

  const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        {variant === "vip" ? (
          // VIP Success Modal
          <>
            <DialogHeader className="bg-gradient-to-r from-[#0e746b] to-[#0e946b] -mx-6 -mt-6 px-6 py-4 rounded-t-lg">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-white rounded-full">
                  <img
                    src="../logo.png"
                    alt="SendMoney"
                    className="h-16 w-16"
                  />
                </div>
              </div>
              <DialogTitle className="text-white text-center text-xl">
                VIP Transfer Successful
              </DialogTitle>
              <p className="text-white text-center text-sm opacity-90 mt-1">
                Your money has been sent successfully
              </p>
            </DialogHeader>

            <div className="space-y-4 py-2">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-500">Transaction ID</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">
                    {transactionData.transactionId}
                  </span>
                  <button
                    onClick={handleCopyTransactionId}
                    className="text-emerald-600"
                  >
                    <Copy className="h-4 w-4 text-[#0e746b]" />
                  </button>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-medium text-emerald-800">
                    VIP Transfer Details
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="text-gray-500">Amount Sent</div>
                  <div className="font-medium text-right">
                    ${transactionData.transferAmount.toFixed(2)}
                  </div>

                  <div className="text-gray-500">Transfer Fee</div>
                  <div className="font-medium text-right">
                    ${transactionData.transferFee.toFixed(2)}
                  </div>

                  <div className="text-gray-500">Total Amount</div>
                  <div className="font-medium text-right">
                    $
                    {(
                      transactionData.transferAmount +
                      transactionData.transferFee
                    ).toFixed(2)}
                  </div>

                  <div className="text-gray-500">Date & Time</div>
                  <div className="font-medium text-right">{formatDate()}</div>

                  <div className="text-gray-500">From Country</div>
                  <div className="font-medium text-right">
                    {transactionData.senderCountry || "Not specified"}
                  </div>

                  <div className="text-gray-500">To Country</div>
                  <div className="font-medium text-right">
                    {transactionData.receiverCountry || "Not specified"}
                  </div>

                  <div className="text-gray-500">Receiver Name</div>
                  <div className="font-medium text-right">
                    {transactionData.receiverName || "Not specified"}
                  </div>

                  <div className="text-gray-500">Receiver Account</div>
                  <div className="font-medium text-right">
                    {transactionData.receiverAccountNumber || "Not specified"}
                  </div>

                  <div className="text-gray-500">Payment Method</div>
                  <div className="font-medium text-right capitalize">
                    {transactionData.paymentMethod || "Not specified"}
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-sm">
                <p className="text-yellow-800">
                  <span className="font-medium">VIP Priority:</span> Your
                  transfer has been prioritized and will be processed
                  immediately.
                </p>
              </div>
            </div>

            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" className="flex-1" onClick={onClose}>
                Close
              </Button>
              <Button className="bg-[#0e746b] hover:bg-emerald-700 flex-1">
                <Printer className="mr-2 h-4 w-4" /> Print Receipt
              </Button>
            </DialogFooter>
          </>
        ) : (
          // Scholarship Success Modal
          <>
            <DialogHeader className="bg-gradient-to-r from-[#0e746b] to-[#0e346b] -mx-6 -mt-6 px-6 py-4 rounded-t-lg">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-white rounded-full p-2">
                  <GraduationCap className="h-8 w-8 text-[#0e746b]" />
                </div>
              </div>
              <DialogTitle className="text-white text-center text-xl">
                Scholarship Transfer Complete
              </DialogTitle>
              <p className="text-white text-center text-sm opacity-90 mt-1">
                Your scholarship payment has been processed
              </p>
            </DialogHeader>

            <div className="space-y-4 py-2">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-500">Transaction ID</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">
                    {transactionData.transactionId}
                  </span>
                  <button
                    onClick={handleCopyTransactionId}
                    className="text-blue-600"
                  >
                    <Copy className="h-4 w-4 text-[#0e746b]" />
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="h-5 w-5 text-[#0e346b]" />
                  <h3 className="font-medium text-[#0e346b]">
                    Scholarship Payment Details
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="text-gray-500">Scholarship Amount</div>
                  <div className="font-medium text-right">
                    ${transactionData.transferAmount.toFixed(2)}
                  </div>

                  <div className="text-gray-500">Processing Fee</div>
                  <div className="font-medium text-right">
                    ${transactionData.transferFee.toFixed(2)}
                  </div>

                  <div className="text-gray-500">Total Paid</div>
                  <div className="font-medium text-right">
                    $
                    {(
                      transactionData.transferAmount +
                      transactionData.transferFee
                    ).toFixed(2)}
                  </div>

                  <div className="text-gray-500">Payment Date</div>
                  <div className="font-medium text-right">{formatDate()}</div>

                  <div className="text-gray-500">From Country</div>
                  <div className="font-medium text-right">
                    {transactionData.senderCountry || "Not specified"}
                  </div>

                  <div className="text-gray-500">To Country</div>
                  <div className="font-medium text-right">
                    {transactionData.receiverCountry || "Not specified"}
                  </div>

                  <div className="text-gray-500">Recipient Name</div>
                  <div className="font-medium text-right">
                    {transactionData.receiverName || "Not specified"}
                  </div>

                  <div className="text-gray-500">Recipient Account</div>
                  <div className="font-medium text-right">
                    {transactionData.receiverAccountNumber || "Not specified"}
                  </div>

                  <div className="text-gray-500">Payment Method</div>
                  <div className="font-medium text-right capitalize">
                    {transactionData.paymentMethod || "Not specified"}
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-sm text-justify">
                <p className="text-[#0e346b]">
                  <span className="font-medium">Scholarship Note:</span> This
                  payment has been tagged as an scholarship transfer. The
                  recipient institution will be notified.
                </p>
              </div>
            </div>

            <DialogFooter className="flex sm:justify-between gap-2">
              <Button
                variant="outline"
                className="flex-1 sm:flex-none"
                onClick={onClose}
              >
                Close
              </Button>
              <div className="flex gap-2 flex-1 sm:flex-none">
                <Button
                  variant="outline"
                  className="flex-1 border-[#0e346b] text-white bg-[#0e746b] duration-300 hover:text-[#0e746b]"
                >
                  <Download className="mr-2 h-4 w-4" /> Save
                </Button>
              </div>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
