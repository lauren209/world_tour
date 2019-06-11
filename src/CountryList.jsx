import React, {Component} from 'react';
import CountryCard from './CountryCard.jsx';


class CountryList extends Component{


    constructor(region){
        super(region);
        console.log(region);
        this.state = {
            countryCodeArray: [],
            newRegion: region
            
        }
        console.log(this.state.newRegion);

    }

    render(){
        return(
            <div id="countriesInRegion">
                { this.state.countryCodeArray.map ( what => 
                    (<CountryCard  key={what.alpha3Code} countryCode={what.alpha3Code} />)
                    
                ) }
            </div>
        );
    }


    componentWillReceiveProps(e){
        fetch("https://restcountries.eu/rest/v2/region/" + e.region + "?fields=alpha3Code")
        .then(r => r.json())
        .then(data => {
            this.setState({countryCodeArray: data})
        });
        
    }

    
}


export default CountryList;