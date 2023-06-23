import Image from 'next/image';
import logo from './../assets/imgs/logo.png';

const Navbar = () => {
    return (
        <nav className="bg-purewhite text-black px-16 py-2 flex justify-between place-items-center sticky top-0 z-40 max-h-16 border-b border-solid border-gray">
            <Image
                src={logo}
                alt="Promchatter Logo"
                width={210}
                height={45}
                priority
            />
            <ul className="font-lato flex gap-3">
                <li>
                    <a href="#">Explore</a>
                </li>
                <li>
                    <a href="#">My Prompts</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
            <a
                href="#"
                className="px-6 py-3 border border-solid border-blue rounded-lg font-lato font-bold"
            >
                Sign in
            </a>
        </nav>
    );
};

export default Navbar;
