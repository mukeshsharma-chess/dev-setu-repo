// ✅ src/app/payment-success/[id]/page.js
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PaymentSuccess({ params }) {
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    console.log("✅ Payment successful for cart:", id);
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6 text-center">
      <div className="bg-white p-10 rounded-2xl shadow-md max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Payment Successful 🎉</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your payment! Your transaction for cart <strong>#{id}</strong> was successful.
        </p>
        <Link
          href="/"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
