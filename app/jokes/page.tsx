"use client";

import { useState } from "react";

type Joke = {
  setup: string;
  punchline: string;
};

export default function JokePage() {
  const [joke, setJoke] = useState<Joke | null>(null);

  const getJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data: Joke = await res.json();
    setJoke(data);
  };

  return (
    <div className="min-h-screen p-6 
                    bg-gray-50 dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-4 mt-6">Random Joke Generator</h1>

      <button
        onClick={getJoke}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Get Joke
      </button>

         {joke && (
        <div className="mt-8 max-w-xl mx-auto p-6 rounded-xl
                        bg-white dark:bg-gray-800
                        border border-gray-200 dark:border-gray-700
                        shadow-md">
          
          <p className="text-lg font-semibold">
            <span className="text-blue-600 dark:text-blue-400">
              Setup:
            </span>{" "}
            {joke.setup}
          </p>

          <p className="text-lg mt-4 font-semibold">
            <span className="text-green-600 dark:text-green-400">
              Punchline:
            </span>{" "}
            {joke.punchline}
          </p>
        </div>
      )}
    </div>
  );
}
