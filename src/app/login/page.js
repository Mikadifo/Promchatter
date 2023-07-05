'use client';

import Button from '@/components/button';
import Input from '@/components/input';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(email, password);
        console.log('....');
    };

    return (
        <div className="flex justify-center">
            <div className="text-center my-24 inline-block">
                <h3 className="font-raleway font-bold text-orange text-3xl mb-16">
                    Welcome to Promchatter!
                </h3>
                <Link href="#">
                    <Button customStyle="w-full">Sign in with Google</Button>
                </Link>
                <span className="my-16 font-lato font-light text-gray text-base flex items-center">
                    <span className="border-b border-gray border-solid h-[1px] w-full mr-4" />
                    or
                    <span className="border-b border-gray border-solid h-[1px] w-full ml-4" />
                </span>
                <form
                    onSubmit={handleSubmit}
                    method="get"
                    className="grid text-left gap-2"
                >
                    <Input
                        label="Email:"
                        type="email"
                        name="email"
                        onChange={({ target }) => setEmail(target.value)}
                    />
                    <Input
                        label="Password:"
                        type="password"
                        name="password"
                        labelStyle="mt-4"
                        onChange={({ target }) => setPassword(target.value)}
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
