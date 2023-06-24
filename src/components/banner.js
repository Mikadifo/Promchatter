import Link from 'next/link';
import Button from './button';

const Banner = ({ isFooter = false }) => {
    return (
        <div className="bg-[url('./../assets/imgs/gradient.svg')] bg-no-repeat bg-cover text-white text-center py-32">
            <h1 className="mb-8">Promchatter</h1>
            <h3 className="mb-12">Unlock the power of AI conversations</h3>
            <Button>Start Exploring</Button>
            {isFooter && (
                <h4>
                    <ul>
                        <li>FAQ</li>
                        <li>About</li>
                        <li>Creators</li>
                        <li>Github</li>
                    </ul>
                </h4>
            )}
        </div>
    );
};

export default Banner;
