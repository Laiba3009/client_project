import React, { useRef, useState } from "react";

const VideoPlayer = () => {
  const iframeRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: isMuted ? "unMute" : "mute",
        args: [],
      }),
      "*"
    );
    setIsMuted(!isMuted);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      {/* Title */}
      <h2 className="text-[24px] md:text-[28px] font-bold text-[#000000] font-albert">
        Best Plants for Bedroom Setup Tutorial – Watch & Learn!
      </h2>

      {/* Down Arrow Icon */}
      <div className="text-3xl mt-2 mb-6">⬇️</div>

      {/* Responsive YouTube Player */}
      <div
        className="relative pt-[56.25%] w-full rounded-xl overflow-hidden shadow-xl cursor-pointer"
        onClick={toggleMute}
      >
        <iframe
          ref={iframeRef}
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/hw1wqsJ9Xic?si=0nToBLAdmZrkYbNp&autoplay=1&mute=1&enablejsapi=1"
          title="Best Plants Tutorial"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        {/* Mute Hint */}
        {isMuted && (
          <div className="absolute bottom-3 right-3 bg-black text-white text-xs px-2 py-1 rounded opacity-80">
            🔇 Click to unmute
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
