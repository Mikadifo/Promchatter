const SearchBar = ({ customStyles }) => {
    return (
        <input
            type="text"
            className={`rounded-lg py-2 px-4 font-lato text-2xl text-black outline-none ring-1 ring-black focus:ring-2 focus:ring-blue/80 ${customStyles}`}
            placeholder="Search"
        />
    );
};

export default SearchBar;
