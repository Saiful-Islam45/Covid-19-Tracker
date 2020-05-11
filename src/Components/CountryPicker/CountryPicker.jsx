import React, { useState, useEffect } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchingCountries} from '../../api'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchCountries, setFetchCountries] = useState([])
    useEffect(() =>{
        const countryApi = async()=>{
            setFetchCountries(await fetchingCountries())
        }

        countryApi();
        // fetch('https://covid19.mathdro.id/api/countries')
        // .then(response => response.json())
        // .then(json => {
        //     setCountry(json)
        //     console.log(json);
        // })
    },[])
    return (
        <div>
           <FormControl className>
                <NativeSelect defaultValue='' onChange = { e => handleCountryChange(e.target.value)}>
                    <option>Select Country</option>
    {fetchCountries.map((country,i)=> <option  key={i} value={country}>{country}</option>)}
                </NativeSelect>
           </FormControl>
        </div>
    )
}

export default CountryPicker;