import Link from 'next/link';

const Banner = (isFooter = false) => {
    return (
        <div>
            <h1>Promchatter</h1>
            <h3>Unlock the power of AI conversations</h3>
            <Link href="/explore">Start Exploring</Link>
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
