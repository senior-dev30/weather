import React from 'react'
import SearchBar from "../../UI/SearchBar/SearchBar"
import {useDispatch, useSelector} from "react-redux"
import {fetchData, showError} from "../../Redux/actions"
import {toISO} from "../../Utils/TranslateCountryISO"
import {Tstate} from "../../Config/TypeScript/Types"
import './CountrySearch.scss'

const CountrySearch = () => {

    const dispatch = useDispatch()
    const error = useSelector((state: Tstate): string => state.error)
    const isLoading = useSelector((state: Tstate) => state.isLoading)
    const submit = (city: string) => {
        let country;
        const arr = city.split(",")
        let stringAfterComma = arr[1];
        if (stringAfterComma !== undefined) {
            stringAfterComma = stringAfterComma.trim()
            const countryNameToCode = toISO(stringAfterComma)
            if (countryNameToCode === null) {
                dispatch(showError(`Sorry, country "${stringAfterComma}" has not been recognised`))
                return
            } else {
                country = countryNameToCode
            }
        }
        dispatch(fetchData({city: arr[0], country}))
    }

    return (
        <div className="CountrySearch">
            <SearchBar onSubmit={submit} isLoading={isLoading}/>
            <p className="CountrySearch__error">{error}</p>
        </div>
    );
};
export default CountrySearch;

