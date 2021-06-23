import {TcountryISO} from '../Config/TypeScript/Types';
import {country_data} from '../Config/countries.json';

let country: (undefined | {
    Name: string,
    Code: TcountryISO
});

export const toName = (countryISO: TcountryISO): null | string => {

    country = country_data.find(data => data.Code === countryISO);
    if (country === undefined) {
        console.error(`No country found for ISO code ${countryISO}`)
        return null;
    }
    return country.Name;
}

export const toISO = (name: string): null | TcountryISO => {
    const sanitizeCountryName = (name: string): string => {
        // all letters to lowercase and start capitalize each word
        return name.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join();
    }
    const sanitizedName = sanitizeCountryName(name);
    country = country_data.find(data => data.Name === sanitizedName);
    if (country === undefined) {
        console.error(`No ISO code found ${name}`)
        return null;
    }
    return country.Code;
}