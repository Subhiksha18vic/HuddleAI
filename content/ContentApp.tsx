import React, { useState, useEffect } from "react";
import logo from "../public/logo.webp";
import chromeWindowBg from "../public/chromeWindow.png";
import Layout from "./components/Layout";
import { Providers } from "./Providers";
import Chat from "./components/Chat";
import processAccount from "./utils/processAccount";
import processTx from "./utils/processTx";
import SpeechText from "./components/SpeechToText.tsx";

// async function parseUrlToJson(
//   url: string
// ): Promise<{ type: string; value: any }> {
//   try {
//     const regex =
//       /https:\/\/beryx.io\/search\/fil\/mainnet\/(address|txs)\/([^?]+)/;
//     const match = url.match(regex);

//     if (match && match.length >= 3) {
//       const type = match[1];
//       const value = match[2];

//       if (type === "txs") {
//         const data = await processTx(value);
//         return {
//           type: "tx",
//           value: data,
//         };
//       } else {
//         const data = await processAccount(value);
//         return {
//           type: "address",
//           value: data,
//         };
//       }
//     }
//   } catch (error) {
//     console.error(error);
//     return {
//       type: "error",
//       value: error,
//     };
//   }

//   return {
//     type: "error",
//     value: "Invalid URL",
//   };
// }
export default function ContentApp() {
  const [isdialogOpen, setIsDialogOpen] = useState(true);
  const [chatActive, setChatActive] = useState(false);
  const [currentData, setCurrentData] = useState<any>({});
  const [roomId, setRoomId] = useState("");

  async function initSmith() {
    const url = window.location.href;
    const currentRoom = url.split("/").pop();
    alert(
      `Hudson is ready to help you with the meeting. Please click on the chat button to start the conversation. ${currentRoom}`
    );

    setRoomId(currentRoom as string);
    setChatActive(true);
  }

  if (!isdialogOpen) {
    return (
      <div className="mx-auto p-6">
        <button
          onClick={() => setIsDialogOpen(true)}
          className="bg-white rounded-md p-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Call Smith <span aria-hidden="true">+</span>
        </button>
      </div>
    );
  }

  return (
    <Providers>
      <div className="mx-auto max-w-7xl md:px-0 lg:p-6">
        <Layout>
          {/* Main section with gradient border and logo, description, and chat button */}
          <div
            className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl lg:rounded-3xl md:pt-24 md:h-full sm:h-[100vh] lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 
    border-4 border-transparent bg-clip-border 
    border-gradient-to-r from-blue-300 via-blue-500 to-blue-700 
    rounded-xl 
    shadow-[0_0_15px_rgba(135,206,250,0.8)]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-white text-xl font-bold"
            >
              X
            </button>
            <div className="mx-auto max-w-md text-center lg:py-12 lg:mx-0 lg:flex-auto lg:text-left">
              <div className="flex items-center justify-start space-x-4 my-4 mx-auto">
                <img
                  alt="logo"
                  src={logo}
                  className="relative inline-block w-20 rounded-xl"
                />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Chat with Hudson, your personalized Meet AI assistant
              </h2>
              <p className="mt-6 text-md leading-8 text-gray-300">
                Hudson is an AI-powered assistant that captures and stores
                meeting discussions in real-time. With simple voice queries, you
                can retrieve any information or insights from past meetings
                instantly. Simply ask, and get accurate, context-aware responses
                from your stored meeting data.
              </p>
              {!chatActive ? (
                <button
                  onClick={initSmith}
                  className="bg-zinc-100 mt-6 py-2 px-2 rounded-2xl text-zinc-800 text-md hover:bg-zinc-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-2 font-bold"
                >
                  Call Hudson to initiate chat
                </button>
              ) : (
                <SpeechText />
              )}
            </div>
          </div>
        </Layout>
      </div>
    </Providers>
  );
}
