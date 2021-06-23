// @ts-ignore
import React, {useState, useRef, useEffect} from 'react';
import './SearchBar.scss';
import Loader from '../../UI/Loader/Loader'

interface ISearchBarProps {
    onSubmit: (any: any) => void,
    buttonText?: string
    isLoading?: boolean;
}

const SearchBar = ({onSubmit, isLoading = false, buttonText}: ISearchBarProps) => {

    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef !== null) {
            inputRef.current?.focus()
        }
    }, [])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }


    return (
        <div className="SearchBar">
            <form onSubmit={(e) => {
                e.preventDefault();
                if (input.length >= 2) {
                    onSubmit(input);
                }
            }}>
                <input ref={inputRef} type="text" onChange={handleChange} value={input}/>
                <button>{buttonText || "Look Up Location"}</button>
            </form>
            {isLoading && <Loader/>}

        </div>
    );
};

export default SearchBar;
