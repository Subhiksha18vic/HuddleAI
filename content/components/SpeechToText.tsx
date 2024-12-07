import React, { useState, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SpeechToText = () => {
  const [text, setText] = useState(""); // Transcribed text
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<Message[]>([]); // Chat messages
  const [query, setQuery] = useState(""); // User input for chat

  let recognition: any;

  // Speech recognition initialization
  if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
  } else {
    console.error("SpeechRecognition not supported in this browser");
    setError("SpeechRecognition not supported in this browser");
  }

  // Start listening for speech
  const startListening = () => {
    if (!recognition) return;

    recognition.start();
    setIsListening(true);

    recognition.onresult = (event) => {
      let spokenText = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          spokenText += event.results[i][0].transcript;
        }
      }
      if (spokenText) {
        setText((prevText) => prevText + " " + spokenText);
      }
    };

    recognition.onerror = (event) => {
      console.error("Error occurred in speech recognition: ", event.error);
      setError(event.error);
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);
  };

  const stopListening = () => {
    if (!recognition) return;
    recognition.stop();
    setIsListening(false);
  };

  // Simulated backend call for assistant's response
  const getAssistantResponse = async (userQuery: string) => {
    // Prepare parameters for the backend
    const payload = {
      query: userQuery,
      context: "general", // Add any relevant context if needed
    };

    // Simulate backend call with a delay
    console.log("Sending to backend:", payload); // For debugging
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`You asked: "${userQuery}". Here's my response!`);
      }, 1000);
    });
  };

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: query }]);

    // Fetch response from backend
    const response = await getAssistantResponse(query);
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);

    setQuery("");
  };

  // Simulated backend call for report generation
  const generateReport = async () => {
    // Prepare parameters for the backend
    const payload = {
      messages, // Pass the entire conversation if needed
      meetingTopic: "Meeting Summary", // Example topic
    };

    console.log("Generating report with payload:", payload); // For debugging

    // Simulate backend call
    return new Promise<string>((resolve) => {
      const simulatedSummary = `
      - Discussion on integrating voice commands into UI.
      - Explored Speech-to-Text functionality.
      - Planned enhancements like meeting report generation.
      - Assigned tasks for testing and implementation.
      `;
      setTimeout(() => resolve(simulatedSummary), 1000);
    });
  };

  const handleGenerateReport = async () => {
    // Fetch the summary from backend
    const summary = await generateReport();

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "Here is the report of the meeting:",
      },
      {
        role: "assistant",
        content: summary,
      },
    ]);
  };

  useEffect(() => {
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
    <div className="max-w-lg mx-auto">
      <p className="mt-3 text-lg leading-8 text-gray-300">
        Speech-to-Text Recognition
      </p>

      <div className="my-4">
        <button
          onClick={startListening}
          disabled={isListening}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Start Listening
        </button>
        <button
          onClick={stopListening}
          disabled={!isListening}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Stop Listening
        </button>
      </div>

      {isListening && (
        <p className="text-green-500">Transcribing the call to text...</p>
      )}
      {!isListening && text && (
        <p className="text-red-500">Transcribing Stopped.</p>
      )}
      {/* {error && <p className="text-red-500 pt-2">Error: {error}</p>} */}

      <div className="pt-0">
        <textarea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Transcribed text will appear here..."
          className="mt-4 p-4 w-full bg-gray-100 rounded-lg shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="border-t mt-6 pt-4">
        {/* <h2 className="font-bold text-gray-800 mb-4">Chat Interface</h2> */}
        <button
          onClick={handleGenerateReport}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Generate Report
        </button>
        <div className="pt-4">
          {" "}
          <div
            className="bg-gray-100 p-4 rounded-lg h-64 overflow-y-auto"
            style={{ maxHeight: "250px" }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleQuerySubmit} className="mt-4 flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 p-2 border rounded-l"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SpeechToText;
