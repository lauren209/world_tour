import React from 'react';
// import logo from './logo.svg';
import './CountryApp.css';
// import CountryCard from './CountryCard.jsx';
import CountryList from './CountryList.jsx';



class CountryApp extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
            selectedRegion: "asia"
        }
    };

    getRegion(e){
        console.log(e.target.value);
        this.setState({selectedRegion: e.target.value})
    }



    render (){


        return (
    
            <div className="CountryApp">
                <p>
                    Country app home page
                </p>
                
                
                <select id="regionlist" onChange={(e) => {this.getRegion(e)} }>

                    {this.state.regions.map(z => (
                        <option key={z} value={z}>{z}</option>
                    ))}
        
                </select>
                

                <div>
                    {/* <CountryCard  key="usa" countryCode="usa" /> */}
                    {/* <CountryCard key="can" countryCode="can" /> */}
                    <CountryList region= {this.state.selectedRegion} />
                </div>
            </div>

        )
    }
    
}





export default CountryApp;