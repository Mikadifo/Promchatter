import './globals.css';
import { Lato, Raleway } from 'next/font/google';
import Navbar from '@/components/navbar';

const lato = Lato({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '700'],
    variable: '--font-lato',
});
const raleway = Raleway({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '700'],
    variable: '--font-raleway',
});

export const metadata = {
    title: 'Promchatter',
    description:
        'The place where you will find the perfect prompt for an AI chat',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${lato.variable} ${raleway.variable}`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
