"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Mother from "./Mother";
import Dem from "./Dem";
import { useRouter } from "next/navigation";
import SecondModal from "./SecondModal";

export default function CharityPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // First modal state
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false); // Second modal state
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const confirmNavigation = () => {
        setIsModalOpen(false);
        setIsSecondModalOpen(true); // Open second modal
    };

    return (
        <div className="bg-white text-black min-h-screen">
            <header className="flex justify-between items-center p-6 shadow-md px-6 sm:px-12 md:px-20">
                <h1 className="text-2xl font-bold text-red-600">Save a Child</h1>
                <button onClick={toggleMenu} className="md:hidden text-2xl text-red-600 ml-auto">
                    {isMenuOpen ? 'X' : '☰'}
                </button>
                <nav>
                    <ul className={`flex space-x-6 text-lg sm:text-xl md:text-2xl ${isMenuOpen ? "block" : "hidden md:flex"}`}>
                        <li><Link href="#about" className="hover:text-red-600">About</Link></li>
                        <li><Link href="#mission" className="hover:text-red-600">Our Mission</Link></li>
                        <li><Link href="#contact" className="hover:text-red-600">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/map.png')" }}>
                <h1 className="text-[40px] sm:text-[55px] lg:text-[60px] font-semibold text-red-500 px-6 pt-10 sm:pt-20">
                    Change a Child’s Life Today!
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6">
                    <div className="mt-6 text-lg">
                        <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
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
                    </div>
                    <div className="w-full mt-6 md:mt-0 hidden md:block">
                        <Image src="/childrenx.jpg" alt="Child in need" width={1000} height={800} className="rounded-lg shadow-lg w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            <Mother />
            <Dem />

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

            {isSecondModalOpen && <SecondModal setIsSecondModalOpen={setIsSecondModalOpen} />}

            <footer className="text-center py-6 bg-gray-900">
                <p className="text-gray-400">&copy; 2024 Save a Child. All rights reserved.</p>
            </footer>
        </div>
    );
}
