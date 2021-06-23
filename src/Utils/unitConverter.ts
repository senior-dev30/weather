type Tunit_in = "celsius" | "m" | "kmh" | "percent" | "deg";
type Tunit_out = Tunit_in | "kelvin" | "fahrenheit" | "km" | "mph" | "mile" | "miles" | "feet" | undefined

const unitConverter = (value: number | null, unit_in: Tunit_in, unit_out?: Tunit_out): string => {
    if (value === null) {
        return String(value);
    }
    if (unit_in === "celsius") {
        // value = Math.round(value);
        if (unit_out === "kelvin") {
            return value + 273.15 + "K";
        }
        if (unit_out === "fahrenheit") {
            return Math.round(value * (9 / 5) + 32) + "°F";
        }
        if (unit_out === unit_in) {
            return value + "°C";
        }
    }
    if (unit_in === "m") {
        if (unit_out === "mile" || unit_out === "miles") {
            return Math.round((value * 0.6213 / 1000) * 5280) + " feet";
        }
        return value + "m";
    }
    if (unit_in === "kmh") {
        if (unit_out === "miles") {
            return (value * 0.6213).toFixed(1) + "mph";
        }
        if (unit_out === "km") {
            return value.toFixed(1) + "kph";
        }


    }
    if (unit_in === "percent") {
        return value + "%";
    }
    if (unit_in === "deg") {
        return value + "°";
    }
    console.error("Unhandled conversion " + unit_in + " to " + unit_out);
    return String(value)
}

export default unitConverter;
