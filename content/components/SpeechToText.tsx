// import React, { useState, useEffect } from "react";

// const SpeechToText = () => {
//   const [text, setText] = useState(""); // To store the recognized text
//   const [isListening, setIsListening] = useState(false);
//   const [error, setError] = useState("");

//   let recognition: any;

//   // Check if SpeechRecognition is available
//   if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;
//     recognition = new SpeechRecognition();

//     // SpeechRecognition configuration
//     recognition.continuous = true; // Keep listening for speech
//     recognition.interimResults = true; // Only return final results
//     recognition.lang = "en-US"; // Language for recognition
//   } else {
//     console.error("SpeechRecognition not supported in this browser");
//     setError("SpeechRecognition not supported in this browser");
//   }

//   // Start listening to speech
//   const startListening = () => {
//     if (!recognition) {
//       return;
//     }

//     recognition.start();
//     setIsListening(true);

//     // Event listeners
//     recognition.onresult = (event) => {
//       let spokenText = "";
//       for (let i = event.resultIndex; i < event.results.length; i++) {
//         spokenText += event.results[i][0].transcript;
//         console.log("Confidence: ", event.results[i][0]);
//       }
//       setText((prevText) => prevText + " " + spokenText);
//     };

//     recognition.onerror = (event) => {
//       console.error("Error occurred in speech recognition: ", event.error);
//       setError(event.error);
//       setIsListening(false);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };
//   };

//   // Stop listening to speech
//   const stopListening = () => {
//     if (!recognition) {
//       return;
//     }
//     recognition.stop();
//     setIsListening(false);
//   };

//   useEffect(() => {
//     // Clean up event listeners on component unmount
//     return () => {
//       if (recognition) {
//         recognition.stop();
//         recognition.onresult = null;
//         recognition.onerror = null;
//         recognition.onend = null;
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <p className="mt-6 text-lg leading-8 text-gray-300">
//         Speech-to-Text Recognition
//       </p>
//       <div>
//         <button
//           onClick={startListening}
//           disabled={isListening}
//           className="bg-zinc-100 py-1 px-2 rounded-lg text-zinc-800 text-md hover:bg-zinc-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-2 font-bold my-4 mr-2"
//         >
//           Start Listening
//         </button>
//         <button
//           onClick={stopListening}
//           disabled={!isListening}
//           className="bg-zinc-100 py-1 px-2 rounded-lg text-zinc-800 text-md hover:bg-zinc-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-2 font-bold my-4 mr-2"
//         >
//           Stop Listening
//         </button>
//       </div>
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}
//       <textarea
//         rows={10}
//         cols={50}
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Speech will be converted to text here..."
//       />
//     </div>
//   );
// };

// export default SpeechToText;

import React, { useState, useEffect } from "react";

const SpeechToText = () => {
  const [text, setText] = useState(""); // To store the recognized text
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");

  let recognition: any;

  // Check if SpeechRecognition is available
  if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();

    // SpeechRecognition configuration
    recognition.continuous = true; // Keep listening for speech
    recognition.interimResults = true; // Only return final results
    recognition.lang = "en-US"; // Language for recognition
  } else {
    console.error("SpeechRecognition not supported in this browser");
    setError("SpeechRecognition not supported in this browser");
  }

  // Start listening to speech
  const startListening = () => {
    if (!recognition) {
      return;
    }

    recognition.start();
    setIsListening(true);

    // Event listeners
    recognition.onresult = (event) => {
      let spokenText = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        spokenText += event.results[i][0].transcript;
        console.log("Confidence: ", event.results[i][0]);
      }
      setText((prevText) => prevText + " " + spokenText);
    };

    recognition.onerror = (event) => {
      console.error("Error occurred in speech recognition: ", event.error);
      setError(event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  // Stop listening to speech
  const stopListening = () => {
    if (!recognition) {
      return;
    }
    recognition.stop();
    setIsListening(false);
  };

  useEffect(() => {
    // Clean up event listeners on component unmount
    return () => {
      if (recognition) {
        recognition.stop();
        recognition.onresult = null;
        recognition.onerror = null;
        recognition.onend = null;
      }
    };
  }, []);

  return (
    <div>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Speech-to-Text Recognition
      </p>
      <div>
        <button
          onClick={startListening}
          disabled={isListening}
          className="bg-zinc-100 py-1 px-2 rounded-lg text-zinc-800 text-md hover:bg-zinc-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-2 font-bold my-4 mr-2"
        >
          Start Listening
        </button>
        <button
          onClick={stopListening}
          disabled={!isListening}
          className="bg-zinc-100 py-1 px-2 rounded-lg text-zinc-800 text-md hover:bg-zinc-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-2 font-bold my-4 mr-2"
        >
          Stop Listening
        </button>
      </div>

      {isListening && (
        <p className="mt-4 text-green-500">
          Starting to transcribe your call...
        </p>
      )}

      {!isListening && text && (
        <p className="mt-4 text-red-500">Transcribing stopped.</p>
      )}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <textarea
        rows={10}
        cols={50}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Speech will be converted to text here..."
      />
    </div>
  );
};

export default SpeechToText;
