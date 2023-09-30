import "./SearchBar.style.scss";

interface Props {
    searchTerm: string;
}

function SearchBar({searchTerm} : Props) {
    return (
        <div>
            <input type="text" placeholder={searchTerm}></input>
        </div>
    );
}

export default SearchBar;

