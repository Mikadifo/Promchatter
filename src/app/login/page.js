import Button from '@/components/button';
import Link from 'next/link';

const Login = () => {
    return (
        <div className="text-center my-24">
            <h3 className="font-raleway font-bold text-orange text-3xl mb-16">
                Welcome to Promchatter!
            </h3>
            <Link href="#">
                <Button>Sign in with Google</Button>
            </Link>
            <div className="my-16 font-lato font-light text-gray text-base">
                - or -
            </div>
            <form action="GET">input1 input2</form>
            <Button>Sign in</Button>
            <p className="flex justify-center font-lato font-normal text-black text-lg mt-2">
                Don't have an account yet?
                <Link className="font-bold ml-1" href="/sign-up">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default Login;
