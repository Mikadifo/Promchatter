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
                <Button link to="/">
                    Start Exploring
                </Button>
            </div>
            {isFooter && (
                <div>
                    <h4 className="font-raleway font-bold text-2xl">
                        Check out our resources and links
                    </h4>
                    <ul className="text-xl font-lato mt-8 list-disc list-inside">
                        <li>
                            <Link href="/faqs" className="hover:underline">
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/Mikadifo/Promchatter"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline"
                            >
                                Github
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="mailto:contact@promchatter.com"
                                className="hover:underline"
                            >
                                contact@promchatter.com
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Banner;
