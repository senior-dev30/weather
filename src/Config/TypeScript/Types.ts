export type TcountryISO = string;
export type Ttemperature_unit = "celsius" | "fahrenheit" | "kelvin";
export type Tlength_unit = "km" | "mile";

export interface IweatherData {
    city: string | null,
    country: string | null,
    date: string | null,
    temperature: {
        actual: number | null,
        feelsLike: number | null,
        min: number | null,
        max: number | null
    },
    summary: {
        title: string | null,
        description: string | null
    },
    wind: {
        speed: number | null,
        deg: number | null
    },
    clouds: {
        all: number | null,
        visibility: number | null,
        humidity: number | null
    }
}

export type Tstate = {
    error: string,
    temperature_unit: Ttemperature_unit,
    length_unit: Tlength_unit,
    isLoading: boolean,
    error_message: string,
    weatherData: IweatherData
};
export type Taction = {
    payload: any,
    type: string
};