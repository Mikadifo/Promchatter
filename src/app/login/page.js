import Button from '@/components/button';
import Input from '@/components/input';
import Link from 'next/link';

const Login = () => {
    return (
        <div className="flex justify-center">
            <div className="text-center my-24 inline-block">
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
                <form action="/#" method="get" className="grid text-left gap-2">
                    <Input label="Username:" type="text" name="username" />
                    <Input
                        label="Password:"
                        type="password"
                        name="password"
                        labelStyle="mt-4"
                    />
                    <Link
                        href="/forgot-password"
                        className="text-right mb-8 opacity-70 hover:underline"
                    >
                        Forgot your password?
                    </Link>
                    <Button>Sign in</Button>
                </form>
                <p className="flex justify-center font-lato font-normal text-black text-lg mt-2">
                    Don't have an account yet?
                    <Link
                        className="font-bold ml-1 hover:underline"
                        href="/signup"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
