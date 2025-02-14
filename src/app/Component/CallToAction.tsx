import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CallToAction = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleConfirm = () => {
    setShowModal(false);
    router.push("/become-an-agent"); // Redirect to the page
  };

  return (
    <section className="text-center py-16 px-6 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-red-500">Make a Difference</h2>
      <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
        Every donation, no matter the size, makes a real impact in a child&apos;s life.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link href="/">
          <button
            aria-label="Donate Now"
            className="bg-red-500 text-white w-[220px] h-[60px] sm:w-[200px] sm:h-[50px] rounded-lg font-semibold transition hover:bg-red-600"
          >
            Donate Now
          </button>
        </Link>
        <button
          aria-label="Become an Agent"
          onClick={() => setShowModal(true)}
          className="bg-white border border-red-500 text-red-500 w-[220px] h-[60px] sm:w-[200px] sm:h-[50px] rounded-lg font-semibold transition hover:bg-red-500 hover:text-white"
        >
          Become an Agent
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">Confirm Your Action</h3>
            <p className="mt-2 text-gray-600">
              Are you sure you want to proceed to the Become an Agent page?
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Yes, Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CallToAction;
