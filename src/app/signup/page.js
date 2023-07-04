import Button from '@/components/button';
import Input from '@/components/input';
import Link from 'next/link';
import AuthBanner from '../../components/authBanner';

const SignUp = () => {
    return (
        <div className="flex justify-center">
            <div className="text-center my-24 inline-block">
                <AuthBanner />
                <form action="/#" method="get" className="grid text-left gap-2">
                    <Input label="Username:" type="text" name="username" />
                    <Input
                        label="Password:"
                        type="password"
                        name="password"
                        labelStyle="mt-4"
                    />
                    <Input
                        label="Email:"
                        type="email"
                        name="email"
                        labelStyle="mt-4"
                    />
                    <p className="text-start mb-8 opacity-70">
                        At least 8 characters, a sign, a number and capital
                        letters.
                    </p>
                    <Button>Sign up</Button>
                </form>
                <p className="flex justify-center font-lato font-normal text-black text-lg mt-2">
                    Already a member?
                    <Link
                        className="font-bold ml-1 hover:underline"
                        href="/signup"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
