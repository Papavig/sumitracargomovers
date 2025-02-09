import { FC } from "react";
import Logo from "@/assets/Images/Logo-full.png";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-10">
      {/* Top Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side - Company Info */}
        <div>
          <img src={Logo} alt="Company Logo" className="h-10 mb-4" />
          <p className="text-gray-400">
            Sumitra Cargo Movers or Sumitra Packers and Movers revolutionizes
            logistics with cutting-edge technology, providing reliable and
            customer-centric intracity and intercity transportation solutions
            for a seamless cargo moving experience.
          </p>
        </div>

        {/* Middle Section - Useful Links */}
        <div className="md:text-center">
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-destructive transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-destructive transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-destructive transition">
                Blogs
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-destructive transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Address */}
        <div className="md:text-right">
          <h3 className="text-lg font-semibold mb-3">Our Address</h3>
          <p className="text-gray-400">
            Sumitra Cargo Movers
            <br />
            Mayur Park Complex, G-102,Sector - 36,
            <br />
            Kamothe, Panvel, Navi Mumbai, Maharashtra 410206
            <br />
            Phone: <a href="tel:+917039001002">+91 70390 01002</a>
            <br />
            Email:{" "}
            <a href="mailto:Support@sumitracargomovers.com">
              Support@sumitracargomovers.com
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>© {currentYear} Sumitra Cargo Movers. All rights reserved.</p>
        <a
          href="https://github.com/Papavig"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="md:text-right">Developed by Vignesh Esakkiappan</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
