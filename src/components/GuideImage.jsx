import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const DownloadGuide = () => {
  const containerRef = useRef(null);

  const handleDownload = async () => {
    const element = containerRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/jpeg");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Guide.pdf");
  };

  return (
    <div className="text-center mt-12">
      {/* Invisible container but still rendered */}
      <div
        ref={containerRef}
        style={{ visibility: "hidden", position: "absolute", top: "-9999px" }}
      >
        <img
          src="/images/guide.jpg"
          alt="Guide"
          style={{ width: "600px" }} // Adjust for better PDF size
          crossOrigin="anonymous"
        />
      </div>

      {/* Urdu View Link */}
      <a
        href="/images/guide.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-4 text-[#B8860B] underline font-bold"
        style={{ fontFamily: "Noto Nastaliq Urdu, serif" }}
      >
        👁️ تصویر دیکھیں
      </a>
      <br />

      {/* Urdu Download Button */}
      <button
        onClick={handleDownload}
        className="px-5 py-3 bg-black text-[#B8860B] rounded-lg hover:bg-gray-700 transition font-bold"
        style={{ fontFamily: "Noto Nastaliq Urdu, serif" }}
      >
        📥 پی ڈی ایف ڈاؤن لوڈ کریں
      </button>
    </div>
  );
};

export default DownloadGuide;
