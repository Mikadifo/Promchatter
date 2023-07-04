const Button = ({ children, customStyle = '' }) => {
    return (
        <button
            className={`bg-blue text-white px-6 py-3 rounded-lg shadow-bottom font-bold ${customStyle}`}
        >
            {children}
        </button>
    );
};

export default Button;
