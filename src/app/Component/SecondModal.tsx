"use client"; // Ensure this is a client component in Next.js App Router

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SecondModalProps {
  setIsSecondModalOpen: (isOpen: boolean) => void;
}

const SecondModal: React.FC<SecondModalProps> = ({ setIsSecondModalOpen }) => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "",
    number: "",
    address: "",
    state: "",
  });
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("User Data Submitted:", userData);

    setIsSecondModalOpen(false); // Close modal before navigating
    router.push("/become-an-agent");
};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold text-red-600">Provide Your Information</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={userData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg mb-3"
            required
          />
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={userData.number}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg mb-3"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={userData.address}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg mb-3"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={userData.state}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg mb-3"
            required
          />
          <div className="mt-4 flex justify-between">
            <button
              type="button"
              onClick={() => setIsSecondModalOpen(false)}
              className="bg-gray-300 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecondModal;
