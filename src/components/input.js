const Input = ({ type, label, name, labelStyle = '', inputStyle = '' }) => {
    return (
        <>
            <label
                htmlFor={name}
                className={`font-lato font-bold text-black text-xl ${labelStyle}`}
            >
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className={`border border-solid border-gray rounded
                font-lato font-normal text-black text-xl py-1 px-2 ${inputStyle}`}
            />
        </>
    );
};

export default Input;
