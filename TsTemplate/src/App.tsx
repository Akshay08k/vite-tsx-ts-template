import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-6 animate-fade-in">
        🚀 Vite + React + Tailwind
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl mb-8 animate-fade-in delay-200">
        This is a minimal but stylish starter template with TypeScript or
        JavaScript support.
      </p>

      <a
        href="https://github.com/akshay08k" // update this if needed
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition-all duration-300 animate-fade-in delay-500"
      >
        <span>Github </span>
      </a>
    </div>
  );
};

export default App;
