const Chip = ({ active, children }) => {
    return (
        <button
            className={`${
                active
                    ? 'bg-green text-white hover:opacity-80'
                    : 'bg-black/10 text-black hover:bg-green/30'
            } py-3 px-6 rounded-full font-lato font-bold text-xs`}
        >
            {children}
        </button>
    );
};

export default Chip;
