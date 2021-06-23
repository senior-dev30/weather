import './SideBar.scss';
import {TcountryISO} from '../../Config/TypeScript/Types';
import {toName} from "../../Utils/TranslateCountryISO";
import {fetchData} from "../../Redux/actions";
import {useDispatch} from "react-redux";

type props = {
    locations: Array<{
        city: string,
        countryISO: TcountryISO
    }>
}
const SideBar = ({locations}: props) => {
    const dispatch = useDispatch();
    const click = (city: string, countryISO: TcountryISO) => {
        dispatch(fetchData({city, country: countryISO}))
    }

    return (
        <div className="SideBar">
            <div className="SideBar__Content">
                <h2>Popular Searches:</h2>
                {locations.map(({city, countryISO}) => <li key={city + countryISO}
                                                           onClick={() => click(city, countryISO)}>{`${city}, ${toName(countryISO)}`}</li>)}
            </div>
        </div>
    );
};

export default SideBar;