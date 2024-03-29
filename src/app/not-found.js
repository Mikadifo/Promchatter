import Button from '@/components/button';

const NotFound = () => {
    return (
        <div className="text-center bg-[url('./../assets/imgs/gradient.svg')] bg-no-repeat bg-cover text-white h-screen grid place-items-center">
            <div>
                <h1 className="text-9xl font-raleway font-bold mb-12">404</h1>
                <h2 className="text-6xl font-raleway font-bold mb-8">Oops!</h2>
                <p className="text-4xl font-lato mb-12">
                    The page you're looking for does not exist.
                </p>
                <Button link to="/">
                    Back to Home
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
