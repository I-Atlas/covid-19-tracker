import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const receivedData = async (country) => {
    let changeableUrl=url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const {data: {deaths, confirmed, recovered, lastUpdate}} = await axios.get(changeableUrl);

        return {deaths, confirmed, recovered, lastUpdate};
    }   catch (error) {
        return error;
    }
};

export const receivedDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    }   catch (error) {
        return error;
    }
};

export const receivedCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    }   catch (error) {
        return error;
    }
};