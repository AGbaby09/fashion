import "@/styles/Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav id="Navbar">
      <Link href="/">Home</Link>
      <Link href="/">About</Link>
      <Link href="/">Services</Link>
      <Link href="/">Gallery</Link>
    </nav>
  );
};

export default Navbar;
