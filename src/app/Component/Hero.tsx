import Image from "next/image";
import Mother from "./Mother";
import Link from "next/link";

export default function CharityPage() {
    return (
        <div className="bg-white text-black min-h-screen">
            <header className="flex justify-between items-center p-6 shadow-md px-6 sm:px-12 md:px-20">
                <h1 className="text-2xl font-bold text-red-600">Save a Child</h1>
                <nav>
                    <ul className="flex space-x-6 text-lg sm:text-xl md:text-2xl">
                        <li><a href="#about" className="hover:text-red-600">About</a></li>
                        <li><a href="#mission" className="hover:text-red-600">Our Mission</a></li>
                        <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section with background */}
            <section
                className="relative bg-cover bg-center h-screen"
                style={{ backgroundImage: "url('/map.png')" }}
            >
                <h1 className="text-[40px] md:text-[55px] lg:text-[60px] font-semibold text-red-500 px-6 pt-10 sm:pt-20 md:pt-20 lg:pt-20">
                    Change a Child’s Life Today!
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-[15px] lg:px-[30px]">
                    {/* Text Content on Left */}
                    <div className="mt-6 space-x-4 text-[15px] sm:text-[20px] md:text-[25px]">
                        <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
                            Our charity has impacted thousands of children, providing them with the resources they need to thrive.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <Link href="/">
                                <button className="bg-red-500 text-white w-[220px] h-[60px] rounded-lg font-semibold">
                                    Donate Now
                                </button>
                            </Link>
                            <Link href="/become-an-agent">
                                <button className="bg-white border border-red-500 text-red-500 w-[220px] h-[60px] rounded-lg font-semibold">
                                    Become an Agent
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image on Right */}
                    <div className="w-full mt-6 md:mt-0">
                        <Image
                            src="/childrenx.jpg"
                            alt="Child in need"
                            width={1000}
                            height={800}
                            className="rounded-lg shadow-lg w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>


            {/* About Section */}
            {/* <section id="about" className="text-center py-16 px-6 bg-gray-50">
                <h2 className="text-3xl sm:text-4xl font-bold text-red-500">About Us</h2>
                <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
                    We are dedicated to improving children&apos;s lives through education, healthcare, and support programs.
                </p>
            </section> */}

            {/* Mother Section */}
            <Mother />

            {/* Why Work With Us */}
            {/* <section className="text-center py-16 px-6 bg-white">
                <h2 className="text-3xl sm:text-4xl font-bold text-red-500">Why Work With Us?</h2>
                <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
                    Our charity has impacted thousands of children, providing them with the resources they need to thrive.
                </p>
            </section> */}

            {/* Call to Action */}
            <section className="text-center py-16 px-6 bg-gray-50">
                <h2 className="text-3xl sm:text-4xl font-bold text-red-500">Make a Difference</h2>
                <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
                    Every donation, no matter the size, makes a real impact in a child&apos;s life.
                </p>
                <div className="mt-6 space-x-4 text-[20px] sm:text-[25px] md:text-[30px]">
                    <Link href="/">
                        <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold">
                            Donate Now
                        </button>
                    </Link>
                    <Link href="/become-an-agent">
                        <button className="bg-white border border-red-500 text-red-500 px-6 py-3 rounded-lg font-semibold">
                            Become an Agent
                        </button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 bg-gray-900">
                <p className="text-gray-400">&copy; 2024 Save a Child. All rights reserved.</p>
            </footer>
        </div>
    );
}
