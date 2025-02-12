import { X } from "lucide-react";
import { Check } from "lucide-react";

interface SuccessModalProps {
  onClose: () => void;
  transactionData: {
    transferAmount: number;
    transferFee: number;
    totalToReceive: number;
    transactionId: string;
    shopAddress?: string;
  };
  variant?: "default" | "shop";
}

export function SuccessModal({
  onClose,
  transactionData,
  variant = "default",
}: SuccessModalProps) {
  const {
    transferAmount,
    transferFee,
    totalToReceive,
    transactionId,
    shopAddress,
  } = transactionData;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>

          {variant === "default" ? (
            <>
              <div className="flex justify-center mb-4">
                <div className="bg-[#CFFAFE] rounded-full p-2">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <p className="text-lg mb-6">
                Your transaction has been completely Successfully
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold text-left">Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Transfer Amount</span>
                    <span>{transferAmount.toFixed(2)} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transfer Fee</span>
                    <span>2+ {transferFee.toFixed(2)} USD</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Transfer Total</span>
                    <span>{(transferAmount + transferFee).toFixed(2)} USD</span>
                  </div>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span>Total to Receive</span>
                  <span>{totalToReceive.toFixed(2)} USD</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-lg mb-4">
                Receiver will receive ${totalToReceive.toFixed(2)}
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-left mb-2">
                  From (Shop Address)
                </h3>
                <p className="text-left text-gray-600">
                  {shopAddress ||
                    "Lorem ipsum dolor sit amet consectetur. Venenatis non vel laoreet iaculis egestas luctus enim varius. Fermentum semper at non amet dignissim tellus congue malesuada pulvinar."}
                </p>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span>Total to Receive</span>
                <span>${totalToReceive.toFixed(2)} USD</span>
              </div>
            </>
          )}

          <div className="mt-6 pt-4 border-t text-center text-sm text-gray-600">
            Transaction id: {transactionId}
          </div>
        </div>
      </div>
    </div>
  );
}
