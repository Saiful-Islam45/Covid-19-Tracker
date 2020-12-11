import React, { Component } from 'react';
import './App.css';
import { fetchData } from './api';
import Card from './Components/Cards/Card';
import Charts from './Components/Charts/Charts';
import CountryPicker from './Components/CountryPicker/CountryPicker';


class App extends Component {
  state = {
    data: {},
    country:'',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }
  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country});
    console.log(fetchedData);
    
  }
  render() {
    const {data} = this.state;
    return (
      <div className="container">
        <div className = "text-center"> 
          <h2> Covid-19 Tracker</h2>
        </div>
        <Card data = {data}/>
        <CountryPicker handleCountryChange = {this.handleCountryChange}/>
        <Charts/>
        
      </div>
    );
  }
}

export default App;
