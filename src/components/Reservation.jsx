import React, { useState } from "react";

export function ReservationForm() {
  const [tableSize, setTableSize] = useState("2");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for reservation logic
    console.log("Reservation:", { tableSize, mobileNo, email });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg p-8 border border-amber-500 rounded-md shadow-lg">
        <h1 className="text-center text-2xl font-bold text-amber-500">Reserve Your Table</h1>

        {/* Table Size Selection */}
        <div className="space-y-4">
          <label className="text-lg font-semibold text-amber-500">Select Table Size</label>
          <div className="flex space-x-4">
            {["2", "4", "6"].map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`table-${size}`}
                  value={size}
                  checked={tableSize === size}
                  onChange={() => setTableSize(size)}
                  className="text-amber-500 focus:ring-amber-500"
                />
                <label htmlFor={`table-${size}`} className="text-amber-500">
                  {size} Person
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Number */}
        <div className="space-y-2">
          <label htmlFor="mobile" className="text-amber-500">Mobile Number</label>
          <input
            id="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required
            className="w-full bg-black border border-amber-500 text-amber-500 placeholder-amber-500/50 px-4 py-2 rounded-md focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-amber-500">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-black border border-amber-500 text-amber-500 placeholder-amber-500/50 px-4 py-2 rounded-md focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-md"
        >
          Book Seat
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
