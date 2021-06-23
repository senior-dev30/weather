import SideBar from "./Containers/SideBar/SideBar";
import Header from "./Containers/Header/Header";
import Body from "./Containers/Body/Body";
import './App.scss';

const App = () => {
    const locations = [{
        city: "Madrid",
        countryISO: "ES"
    },
        {
            city: "Oradea",
            countryISO: "RO"
        },
        {
            city: "San Francisco",
            countryISO: "US"
        },
        {
            city: "Rome",
            countryISO: "IT"
        },
        {
            city: "Rome",
            countryISO: "US"
        }
    ]

    return (
        <div className="App">
            <Header/>
            <SideBar locations={locations}/>
            <Body/>
        </div>
    );
};

export default App;
