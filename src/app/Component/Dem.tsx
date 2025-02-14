import React from "react";
import Image from "next/image";

const cardData = [
  {
    title: "Healthy",
    description:
      "We ensure children have access to proper healthcare, nutrition, and clean water to grow strong and thrive.",
    image: "/healthy.jpg",
    width: 100, // Set your custom width
    height: 100, // Set your custom height
  },
  {
    title: "Educated",
    description:
      "Every child deserves access to quality education, empowering them for a better future.",
    image: "/educated.jpg",
    width: 130,
    height: 120,
  },
  {
    title: "Protected",
    description:
      "We work to keep children safe from violence, exploitation, and harmful practices.",
    image: "/protected2.jpg",
    width: 150,
    height: 150,
  },
  {
    title: "Respected",
    description:
      "Children’s rights must be upheld, ensuring they have a voice and equal opportunities.",
    image: "/respected.jpg",
    width: 130,
    height: 100,
  },
];

const Dem = () => {
  return (
    <section className="flex flex-col items-center text-center p-6 max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <p className="text-[30px] text-red-600 font-medium">
        Relentlessly Pursuing a Better World for Every Child
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
        We have helped save and meaningfully improve more children’s lives than any other humanitarian organization.{" "}
        <span className="text-red-600">We won’t stop</span> until every child is healthy, educated, protected, and respected.
      </h2>

      {/* Responsive Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full">
        {cardData.map((item, index) => (
          <div 
            key={index} 
            className="bg-red-100 shadow-md p-5 rounded-lg flex flex-col items-center w-full max-w-[270px] mx-auto"
          >
            {/* Image Section */}
            <div className="w-full flex justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-red-700 mt-3">{item.title}</h2>
            <h3 className="text-sm text-gray-700 mt-2 text-center">{item.description}</h3>
            <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Read more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dem;
