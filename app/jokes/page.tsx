"use client";

import { useState } from "react";

export default function JokePage() {
  const [joke, setJoke] = useState(null);

  const getJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Random Joke Generator</h1>

      <button
        onClick={getJoke}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Get Joke
      </button>

      {joke && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <p className="text-lg"><b>Setup:</b> {joke.setup}</p>
          <p className="text-lg mt-2"><b>Punchline:</b> {joke.punchline}</p>
        </div>
      )}
    </div>
  );
}
