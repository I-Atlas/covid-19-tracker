import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import {receivedCountries} from '../../Api/Api'
import styles from './Country.module.css';

const Countries = ({handleCountryChange}) => {
    const [Countries, setReceivedCountries] = useState([]);

    useEffect(() => {
        const receivedAPI = async () => {
            setReceivedCountries(await receivedCountries());
        };

        receivedAPI();
    }, []);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
                <option value="">Global</option>{Countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default Countries;