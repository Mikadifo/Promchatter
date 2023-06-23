import Image from 'next/image';
import logo from './../assets/imgs/logo.png';

const Navbar = () => {
    return (
        <nav className="bg-white text-black">
            <Image src={logo} alt="Promchatter Logo" width={218} height={43} />
            <ul className="font-lato">
                <li>
                    <a href="#">Explore</a>
                </li>
                <li>
                    <a href="#">My Prompts</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Sign in</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
