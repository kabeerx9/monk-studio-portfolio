import { FaLocationArrow, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center p-4 bg-gray-800 text-white" id="contact">
      <div className="flex space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
