const Button = ({ children }) => {
    return (
        <button className="bg-blue text-white px-6 py-3 rounded-lg">
            {children}
        </button>
    );
};

export default Button;