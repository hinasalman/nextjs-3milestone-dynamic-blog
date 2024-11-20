// src/components/Navbar.js
import Link from 'next/link';  // Import Link from next/link

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link href="/">Home</Link> {/* Using Link component for routing */}
        </li>
        <li>
          <Link href="/posts/1">First Post</Link> {/* Using Link component for routing */}
        </li>
        <li>
          <Link href="/posts/2">Second Post</Link> {/* Using Link component for routing */}
        </li>
        <li>
          <Link href="/posts/3">Third Post</Link> {/* Using Link component for routing */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
