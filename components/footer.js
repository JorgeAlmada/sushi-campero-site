import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function FooterComponent() {
  const footerElements = ["Bolsa de trabajo", "¿Quienes somos?", "Comentarios"];
  return (
    <footer className="w-100 bg-secondary pt-5 pb-5 mt-12 text-center">
      <div className="flex justify-center gap-2 h-12 mt-4">
        <Link href="https://www.facebook.com/profile.php?id=100063441470645">
          <FaFacebook className="text-white text-lg w-8 h-8 hover:scale-125" />
        </Link>
        <Link href="https://www.instagram.com/sushicampero/">
          <FaInstagram className="text-white text-lg w-8 h-8 hover:scale-125" />
        </Link>
        <Link href="https://www.tiktok.com/@sushicampero">
          <FaTiktok className="text-white text-lg w-8 h-8 hover:scale-125" />
        </Link>
      </div>
      <div className="flex justify-center gap-10 mb-4">
        {footerElements.map((element, index) => {
          return (
            <span key={element} className="text-sm text-white">
              {element}
            </span>
          );
        })}
      </div>
      <span className="text-xs text-white mt-2 opacity-80">© 2023 Sushi Campero</span>
    </footer>
  );
}

export default FooterComponent;
