import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { Award, GraduationCap, Copy, Printer, CheckCircle } from "lucide-react";
import { useState } from "react";

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
  const [copied, setCopied] = useState(false);

  const handleCopyTransactionId = () => {
    navigator.clipboard.writeText(transactionData.transactionId);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);

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

  const handleClose = () => {
    // Clear form fields from localStorage
    localStorage.removeItem("sendMoneyFormData");
    // Call the original onClose function
    onClose();
  };

  // Generate receipt content for both print and download
  const generateReceiptContent = () => {
    const formattedDate = formatDate();
    const title =
      variant === "vip"
        ? "VIP Transfer Receipt"
        : "Scholarship Payment Receipt";
    const amountLabel =
      variant === "vip" ? "Amount Sent" : "Scholarship Amount";
    const feeLabel = variant === "vip" ? "Transfer Fee" : "Processing Fee";
    const recipientLabel = variant === "vip" ? "Receiver" : "Recipient";

    return {
      title,
      amountLabel,
      feeLabel,
      recipientLabel,
      formattedDate,
      amount: transactionData.transferAmount.toFixed(2),
      fee: transactionData.transferFee.toFixed(2),
      total: (
        transactionData.transferAmount + transactionData.transferFee
      ).toFixed(2),
      senderCountry: transactionData.senderCountry || "Not specified",
      receiverCountry: transactionData.receiverCountry || "Not specified",
      receiverName: transactionData.receiverName || "Not specified",
      receiverAccount: transactionData.receiverAccountNumber || "Not specified",
      paymentMethod: transactionData.paymentMethod || "Not specified",
    };
  };

  const handlePrint = () => {
    const receipt = generateReceiptContent();
    const printWindow = window.open("", "_blank");

    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${receipt.title}</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
              h1 { color: #0e746b; }
              .receipt { max-width: 600px; margin: 0 auto; }
              .header { text-align: center; margin-bottom: 20px; }
              .details { border: 1px solid #ddd; padding: 15px; border-radius: 5px; }
              .row { display: flex; justify-content: space-between; margin-bottom: 8px; }
              .label { font-weight: bold; color: #555; }
              .footer { margin-top: 30px; text-align: center; font-size: 14px; color: #777; }
            </style>
          </head>
          <body>
            <div class="receipt">
              <div class="header">
                <h1>${receipt.title}</h1>
                <p>Transaction ID: ${transactionData.transactionId}</p>
                <p>Date: ${receipt.formattedDate}</p>
              </div>
              <div class="details">
                <div class="row">
                  <span class="label">${receipt.amountLabel}:</span>
                  <span>$${receipt.amount}</span>
                </div>
                <div class="row">
                  <span class="label">${receipt.feeLabel}:</span>
                  <span>$${receipt.fee}</span>
                </div>
                <div class="row">
                  <span class="label">Total:</span>
                  <span>$${receipt.total}</span>
                </div>
                <div class="row">
                  <span class="label">From Country:</span>
                  <span>${receipt.senderCountry}</span>
                </div>
                <div class="row">
                  <span class="label">To Country:</span>
                  <span>${receipt.receiverCountry}</span>
                </div>
                <div class="row">
                  <span class="label">${receipt.recipientLabel} Name:</span>
                  <span>${receipt.receiverName}</span>
                </div>
                <div class="row">
                  <span class="label">${receipt.recipientLabel} Account:</span>
                  <span>${receipt.receiverAccount}</span>
                </div>
                <div class="row">
                  <span class="label">Payment Method:</span>
                  <span>${receipt.paymentMethod}</span>
                </div>
              </div>
              <div class="footer">
                <p>Thank you for using our service!</p>
              </div>
            </div>
            <script>
              window.onload = function() { window.print(); }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    } else {
      toast({
        title: "Print failed",
        description:
          "Unable to open print window. Please check your browser settings.",
        variant: "destructive",
      });
    }
  };

  // Render transaction details grid
  const renderTransactionDetails = (
    details: ReturnType<typeof generateReceiptContent>
  ) => (
    <div className="grid grid-cols-2 gap-y-2 text-sm">
      <div className="text-gray-500">{details.amountLabel}</div>
      <div className="font-medium text-right">${details.amount}</div>

      <div className="text-gray-500">{details.feeLabel}</div>
      <div className="font-medium text-right">${details.fee}</div>

      <div className="text-gray-500">
        Total {variant === "vip" ? "Amount" : "Paid"}
      </div>
      <div className="font-medium text-right">${details.total}</div>

      <div className="text-gray-500">Date & Time</div>
      <div className="font-medium text-right">{details.formattedDate}</div>

      <div className="text-gray-500">From Country</div>
      <div className="font-medium text-right">{details.senderCountry}</div>

      <div className="text-gray-500">To Country</div>
      <div className="font-medium text-right">{details.receiverCountry}</div>

      <div className="text-gray-500">{details.recipientLabel} Name</div>
      <div className="font-medium text-right">{details.receiverName}</div>

      <div className="text-gray-500">{details.recipientLabel} Account</div>
      <div className="font-medium text-right">{details.receiverAccount}</div>

      <div className="text-gray-500">Payment Method</div>
      <div className="font-medium text-right capitalize">
        {details.paymentMethod}
      </div>
    </div>
  );

  const receipt = generateReceiptContent();
  const isVip = variant === "vip";
  const headerBgClass = isVip
    ? "bg-gradient-to-r from-[#0e746b] to-[#0e946b]"
    : "bg-gradient-to-r from-[#0e746b] to-[#0e346b]";
  const detailsBgClass = isVip
    ? "bg-emerald-50 border-emerald-100"
    : "bg-blue-50 border-blue-100";
  const iconColor = isVip ? "text-emerald-600" : "text-[#0e346b]";
  const titleColor = isVip ? "text-emerald-800" : "text-[#0e346b]";

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg p-0 h-[90vh] flex flex-col overflow-hidden">
        <DialogHeader className={`${headerBgClass} px-6 py-4 rounded-t-lg`}>
          <div className="flex items-center justify-center mb-2">
            <div className="bg-white rounded-full p-2">
              {isVip ? (
                <img src="../logo.png" alt="SendMoney" className="h-16 w-16" />
              ) : (
                <GraduationCap className="h-8 w-8 text-[#0e746b]" />
              )}
            </div>
          </div>
          <DialogTitle className="text-white text-center text-xl">
            {isVip
              ? "VIP Transfer Successful"
              : "Scholarship Transfer Complete"}
          </DialogTitle>
          <p className="text-white text-center text-sm opacity-90 mt-1">
            {isVip
              ? "Your money has been sent successfully"
              : "Your scholarship payment has been processed"}
          </p>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-500">Transaction ID</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  {transactionData.transactionId}
                </span>
                <Popover open={copied}>
                  <PopoverTrigger asChild>
                    <button
                      onClick={handleCopyTransactionId}
                      className={isVip ? "text-emerald-600" : "text-blue-600"}
                    >
                      {copied ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-[#0e746b]" />
                      )}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-2" side="top">
                    <p className="text-xs">Copied!</p>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className={`${detailsBgClass} p-4 rounded-lg border`}>
              <div className="flex items-center gap-2 mb-3">
                {isVip ? (
                  <Award className={`h-5 w-5 ${iconColor}`} />
                ) : (
                  <GraduationCap className={`h-5 w-5 ${iconColor}`} />
                )}
                <h3 className={`font-medium ${titleColor}`}>
                  {isVip
                    ? "VIP Transfer Details"
                    : "Scholarship Payment Details"}
                </h3>
              </div>

              {renderTransactionDetails(receipt)}
            </div>

            <div
              className={`${detailsBgClass} p-3 rounded-lg border text-sm ${
                isVip ? "text-yellow-800" : "text-[#0e346b] text-justify"
              }`}
            >
              <p>
                <span className="font-medium">
                  {isVip ? "VIP Priority:" : "Scholarship Note:"}
                </span>{" "}
                {isVip
                  ? "Your transfer has been prioritized and will be processed immediately."
                  : "This payment has been tagged as an scholarship transfer. The recipient institution will be notified."}
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 p-6 bg-white border-t">
          <Button
            variant="outline"
            className={`flex-1 ${!isVip && "sm:flex-none"}`}
            onClick={handleClose}
          >
            Close
          </Button>
          {isVip ? (
            <Button
              className="bg-[#0e746b] hover:bg-emerald-700 flex-1"
              onClick={handlePrint}
            >
              <Printer className="mr-2 h-4 w-4" /> Print Receipt
            </Button>
          ) : (
            <div className="flex gap-2 flex-1 sm:flex-none">
              <Button
                variant="outline"
                className="flex-1 border-[#0e346b] text-white bg-[#0e746b] duration-300 hover:text-[#0e746b]"
                onClick={handlePrint}
              >
                <Printer className="mr-2 h-4 w-4" /> Print Receipt
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
