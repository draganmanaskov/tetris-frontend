import React from "react";

const PauseScreen = ({ unPause }) => {
  return (
    <div className="absolute flex h-screen w-full items-center justify-center bg-transparent">
      {/* <div className="h-2/6 w-1/6 bg-black ">
        <h2 className="mb-4 text-2xl font-bold text-purple-600">My Modal</h2>
        <p className="mb-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button
          onClick={unPause}
          className="rounded bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-bold text-white hover:from-pink-500 hover:to-yellow-500"
        >
          Click Me!
        </button>
      </div> */}
      <div className="fixed inset-0 z-50 overflow-y-auto bg-teal-800 bg-transparent bg-opacity-30">
        <div className="flex min-h-screen items-center justify-center">
          <div className="overflow-hidden rounded-lg bg-white">
            <div className="px-6 py-4 text-center">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">Game Paused</h2>
                <button
                  onClick={unPause}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="my-4 text-gray-600">
                Have a break! You can resume anytime.
              </p>

              <button
                onClick={unPause}
                className="mt-4 rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PauseScreen;
