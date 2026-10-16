import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {

  const phoneNumber = "919358949856"; // apna WhatsApp number
  const message = "Hello, I want to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="whatsapp-icon"
        fill="currentColor"
      >
        <path d="M16.02 3C8.84 3 3 8.83 3 16c0 2.3.6 4.54 1.73 6.54L3.05 29l6.62-1.63A12.94 12.94 0 0 0 16.02 29C23.19 29 29 23.17 29 16S23.19 3 16.02 3Zm0 23.72c-2.05 0-4.06-.55-5.82-1.59l-.42-.25-3.93.97 1.05-3.82-.27-.44A10.78 10.78 0 1 1 16.02 26.72Zm5.91-8.07c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.38.49-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.02-2.44-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.7 0 1.59 1.17 3.13 1.33 3.35.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.87.69.79.25 1.51.21 2.08.13.63-.09 1.9-.78 2.17-1.53.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38Z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;