"use client";

import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [qrImage, setQrImage] = useState("");

  async function generateQR() {
    if (!inputText) return alert("Please enter some text.");

    const res = await fetch(`/api/qr?text=${encodeURIComponent(inputText)}`);
    const blob = await res.blob();
    setQrImage(URL.createObjectURL(blob));
  }

  return (
    <div className="flex flex-col items-center p-6 space-y-4 max-w-md mx-auto">

      <h1 className="text-2xl font-bold">QR Code Generator</h1>

      <input
        type="text"
        className="w-full p-3 border rounded-lg"
        placeholder="Enter text or URL"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button
        onClick={generateQR}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Generate QR
      </button>

      {qrImage && (
        <img src={qrImage} alt="Generated QR" className="w-64 h-64 mt-4" />
      )}
    </div>
  );
}
