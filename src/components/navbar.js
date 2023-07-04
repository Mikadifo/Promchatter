import Image from 'next/image';
import Link from 'next/link';
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
                    <Link href="/">Explore</Link>
                </li>
                <li>
                    <Link href="/myprompts">My Prompts</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
            <Link
                href="/login"
                className="px-6 py-3 border border-solid border-blue rounded-lg font-lato font-bold"
            >
                Sign in
            </Link>
        </nav>
    );
};

export default Navbar;
