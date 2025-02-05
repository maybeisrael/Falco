import React from 'react'
import Image from 'next/image'

const Mother = () => {
    return (
        <div className="py-8 ">
            {/* Upper Section with gray background covering the entire width */}
            <div className="bg-gray-100 py-8  w-full">
                <div className="flex flex-col md:flex-row items-center space-x-8 max-w-screen-xl mx-auto">
                    {/* Image */}
                    <div className="flex-shrink-0 mb-6 md:mb-0">
                        <Image
                            src="/AdorableMotherBaby.jpg"
                            alt="Child in need"
                            width={600}
                            height={400}
                            className="rounded-lg object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 hover:text-red-600">
                            Your generosity will allow us to help more families
                        </h1>
                        <p className="text-base md:text-lg">
                            We serve millions of children and their families each year, but more need our help.
                            Yet, simply because we don’t have enough sleeping rooms around the world, 138,000+ families
                            are turned away each year. Your donation can help us expand to fulfill the needs of more sick children
                            and their families.
                        </p>
                    </div>
                </div>
            </div>

            {/* Lower Section */}
            <div className="flex flex-col md:flex-row bg-white items-center max-w-screen-xl mt-[60px] px-6 py-8">
                {/* Image */}
                <div className="flex-shrink-0 mb-6 md:mb-0 md:px-[20px]">
                    <Image
                        src="/money.jpg"
                        alt="money"
                        width={650}
                        height={250}
                        className="rounded-lg object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="px-[10px]">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 hover:text-red-600">
                        A Dollar can save a child
                    </h1>
                    <p className="text-base md:text-lg">
                    85% of every dollar spent goes directly to supporting RMHC programs across the globe.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Mother
