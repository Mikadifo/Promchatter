import Button from '@/components/button';

const AuthBanner = () => {
    return (
        <>
            <h3 className="font-raleway font-bold text-orange text-3xl mb-16">
                Welcome to Promchatter!
            </h3>
            <Button link to="#" customStyle="w-full">
                Sign in with Google
            </Button>
            <span className="my-16 font-lato font-light text-gray text-base flex items-center">
                <span className="border-b border-gray border-solid h-[1px] w-full mr-4" />
                or
                <span className="border-b border-gray border-solid h-[1px] w-full ml-4" />
            </span>
        </>
    );
};

export default AuthBanner;
