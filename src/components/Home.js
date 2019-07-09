import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Savvor Restaurant and Lounge Survey and Suggestion Box
                <h1></h1>Celebrate.

                <h1>Live Music, Catering
                </h1> & Event designing services
                </h1>
                 <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis odit recusandae consequatur, cumque porro, vel amet quae nesciunt at ratione neque accusamus molestias labore minima doloribus aliquam quisquam autem. Hic. 
                </p>
            <Link to='/about'>Go to About Page</Link>
            </div>
        );
    }
            
}
