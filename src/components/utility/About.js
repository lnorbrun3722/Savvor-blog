import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
         
            <h1>Hello from your great friends at Savvor</h1>
            <p>
                
            About Us, 
            Soul Food and American Southern Cuisine


 

An attractive neighbor in Boston's Leather District, Savvor Restaurant and Lounge housed on Lincoln Street is just a 5 minute walk from South Station, and located within walking distance of the city's bustling Financial District. Savvor offers the perfect combination of authentic Southern comfort cuisine with delectable Caribbean influences.
​
A robust menu awaits our patrons―replete with eclectic small plate options inspired by our rich Caribbean roots. We invite our guests to complement their dining experience with a Savvor signature drink or unique house-recipe cocktail with one of our exotic island rums hailing from all corners of the West Indies.
 
 


            </p>
                <Link to='/'>Go Back Home</Link>    
            </div>
        );
    }
}
