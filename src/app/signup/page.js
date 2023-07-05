'use client';

import Button from '@/components/button';
import Input from '@/components/input';
import Link from 'next/link';
import { useState } from 'react';
import AuthBanner from '../../components/authBanner';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(email, password, username);
        console.log('....');
    };

    return (
        <div className="flex justify-center">
            <div className="text-center my-24 inline-block">
                <AuthBanner />
                <form
                    onSubmit={handleSubmit}
                    method="get"
                    className="grid text-left gap-2"
                >
                    <Input
                        label="Email:"
                        type="text"
                        name="email"
                        onChange={({ target }) => setEmail(target.value)}
                    />
                    <Input
                        label="Username:"
                        type="Username"
                        name="username"
                        labelStyle="mt-4"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                    <Input
                        label="Password:"
                        type="password"
                        name="Password"
                        labelStyle="mt-4"
                        onChange={({ target }) => setPassword(target.value)}
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
                        href="/login"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
