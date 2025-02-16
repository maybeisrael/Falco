"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Mother from "./Mother";
import Dem from "./Dem";
import SecondModal from "./SecondModal";

export default function CharityPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // First modal state
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false); // Second modal state
    // Ensure this is used in navigation

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

   const confirmNavigation = () => {
       setIsModalOpen(false);
       setIsSecondModalOpen(true); // Open second modal instead of navigating immediately
   };

    return (
        <div className="bg-white text-black min-h-screen">
            {/* Header */}
            <header className="flex justify-between items-center p-6 shadow-md px-6 sm:px-12 md:px-20 bg-white fixed w-full top-0 z-50">
                <h1 className="text-2xl font-bold text-red-600">Save a Child</h1>
                <button onClick={toggleMenu} className="md:hidden text-2xl text-red-600 ml-auto">
                    {isMenuOpen ? "✖" : "☰"}
                </button>
                <nav>
                    <ul className={`flex space-x-6 text-lg sm:text-xl md:text-2xl ${isMenuOpen ? "block" : "hidden md:flex"}`}>
                        <li><Link href="#about" className="hover:text-red-600">About</Link></li>
                        <li><Link href="#mission" className="hover:text-red-600">Our Mission</Link></li>
                        <li><Link href="#contact" className="hover:text-red-600">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center px-6"
                style={{ backgroundImage: "url('/map.png')" }}>
                <h1 className="text-[40px] sm:text-[55px] lg:text-[60px] font-semibold text-red-500">
                    Change a Child’s Life Today!
                </h1>
                <p className="mt-4 text-lg sm:text-xl max-w-3xl">
                    Our charity has impacted thousands of children, providing them with the resources they need to thrive.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link href="/">
                        <button className="bg-red-500 text-white w-[220px] h-[60px] sm:w-[200px] sm:h-[50px] rounded-lg font-semibold">
                            Donate Now
                        </button>
                    </Link>
                    <button 
                        onClick={openModal}
                        className="bg-white border border-red-500 text-red-500 w-[220px] h-[60px] sm:w-[200px] sm:h-[50px] rounded-lg font-semibold transition hover:bg-red-500 hover:text-white"
                    >
                        Become an Agent
                    </button>
                </div>
            </section>

            {/* Content */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-12">
                    <div>
                        <h2 className="text-3xl font-bold text-red-600">Make a Difference</h2>
                        <p className="mt-4 text-lg text-gray-700">
                            Your contributions help us provide shelter, education, and medical care to children in need.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <Image 
                            src="/childrenx.jpg" 
                            alt="Child in need" 
                            width={1000} 
                            height={800} 
                            className="rounded-lg shadow-lg w-full h-full object-cover" 
                        />
                    </div>
                </div>
            </div>

            {/* Additional Sections */}
            <Mother />
            <Dem />

            {/* First Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
                        <h2 className="text-xl font-semibold text-red-600">Are you sure?</h2>
                        <p className="mt-2 text-gray-700">You are about to become an agent. Do you want to continue?</p>
                        <div className="mt-4 flex justify-center gap-4">
                            <button
                                onClick={confirmNavigation}
                                className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600"
                            >
                                Yes, Continue
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Second Modal */}
            {isSecondModalOpen && <SecondModal setIsSecondModalOpen={setIsSecondModalOpen} />}

            {/* Footer */}
            <footer className="text-center py-6 bg-gray-900 text-gray-400">
                &copy; 2024 Save a Child. All rights reserved.
            </footer>
        </div>
    );
}
