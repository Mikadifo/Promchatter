import Link from 'next/link';
import Button from './button';

const Banner = ({ isFooter = false }) => {
    return (
        <div
            className={`bg-[url('./../assets/imgs/gradient.svg')] bg-no-repeat bg-cover text-white ${
                isFooter
                    ? 'py-16 px-32 flex justify-between'
                    : 'py-32 text-center'
            }`}
        >
            <div>
                <h1 className="mb-8 text-5xl font-raleway font-bold">
                    Promchatter
                </h1>
                <h3 className="mb-12 text-3xl font-raleway font-normal">
                    Unlock the power of AI conversations
                </h3>
                <Link href="#">
                    <Button>Start Exploring</Button>
                </Link>
            </div>
            {isFooter && (
                <div>
                    <h4 className="font-raleway font-bold text-2xl">
                        Check out our resources and links
                    </h4>
                    <ul className="text-xl font-lato mt-8 list-disc list-inside">
                        <li>
                            <Link href="#">FAQs</Link>
                        </li>
                        <li>
                            <Link href="#">About</Link>
                        </li>
                        <li>
                            <Link href="#">Creators</Link>
                        </li>
                        <li>
                            <Link href="#">Github</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Banner;
