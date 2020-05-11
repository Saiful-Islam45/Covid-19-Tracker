import Axios from "axios";

const url = 'https://covid19.mathdro.id/api';
export const fetchData = async(country) =>{
    let changeableurl =url; 
    if(country){
        changeableurl = `${url}/countries/${country}`;
    }
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate } } = await Axios.get(changeableurl);
        return {confirmed, recovered, deaths, lastUpdate };
        
    } catch (error) {
        console.log(error);
        
    }
}
//const url2 = 'https://covid19.mathdro.id/api/daily';
// export const fetchDailyData = async() =>{
//     try {
//         const {datas} = await Axios.get(url2);

//         const modifiedData = datas.map((dailyData) => ({
//             confirmed: dailyData.confirmed.total,
//             deaths: dailyData.deaths.total,
//             date: dailyData.reportDate,
//         }));
//         return modifiedData;
        
//     } catch (error) {
        
//     }
// }
export const fetchingCountries = async () =>{
; 
    try {
        const {data: {countries}} = await Axios.get(`${url}/countries`);
        return countries.map(country => country.name);
    } catch (error) {
        console.log(error);
        
    }
}