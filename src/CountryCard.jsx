
import React, {Component} from 'react';
import "./CountryCard.css";


class CountryCard extends Component{
    // props capture what is given inside the attr tag
    constructor(props) {
        super(props);
        //for things that will effect the UI inside state
        // immutable
        this.state = {
            countryData: null,
            countryCode: 'new code',
            name: 'name'
        }
    }
    

    render() {
        if (this.state.countryData !== null) {
            // console.log(this.state.countryData.languages);
            return (
                
                <div className="countryDetails">
                    <h2>Name: {this.state.countryData.name}</h2>
                    <span>Code: {this.props.countryCode}</span>
                    <span>Flag <img src= {this.state.countryData.flag} alt=""/></span>
                    <span>Population: {this.state.countryData.population}</span>
                    <span>Area: {this.state.countryData.area}</span>
                    <span>Languages: 
                        <ul>
                            
                        {this.state.countryData.languages.map ( lang =>
                            <li key={lang.name}>{lang.name}</li>
                        )}
                        </ul>
                    </span>
                    
                </div>
            );
        } else {
            return (
                <div>
                    <p>No country data</p>
                </div>
            );
        }


    }


    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/alpha/" + this.props.countryCode)
        .then(r => r.json())
        .then(data => {
            this.setState({countryData: data})
        });
        // this.getCountriesByRegion();
    }
}


export default CountryCard;