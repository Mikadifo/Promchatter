import Link from 'next/link';

const Button = ({ children, customStyle = '', link = false, to }) => {
    const styles = `bg-blue text-white px-6 py-3 rounded-lg shadow-bottom font-bold ${customStyle} hover:bg-opacity-80`;

    if (link)
        return (
            <Link href={to} className={styles}>
                {children}
            </Link>
        );

    return <button className={styles}>{children}</button>;
};

export default Button;
