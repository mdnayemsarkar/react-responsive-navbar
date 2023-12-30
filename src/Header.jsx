import Swctgl from "./Swctgl";
import Sndtgl from "./Tgl-ii";

function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-300 font-bold text-lg">My Website</div>
        {/* swctgl */}

        <Swctgl />
        <div className="text-white text-lg font-semibold">
          Bgcolor-change ={">"}
        </div>
        <Sndtgl title="bgcolor-change" />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
