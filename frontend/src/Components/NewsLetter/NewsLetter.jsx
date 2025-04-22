import React from 'react';

const NewsLetter = () => {
  return (
    <div className="bg-green-50 py-14 px-4 md:px-10">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md px-6 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-3">
          📩 Stay in the Loop
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Get exclusive offers and updates delivered straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <button
            type="submit"
            className="bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
