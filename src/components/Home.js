import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Savvor Restaurant and Lounge Survey and Suggestion Box 
                <h1></h1>Celebrate With Us

                <h1>Live Music, Catering 
                </h1> Event designing services
                </h1>
                 <p>
                 We look forward to receiving your call for reservations of a table for your romantic evening, space for your work function, birthday parties or any celebration with friends.
                Please feel free to leave suggestions with your information. 
                Logout
                </p>
                </div>
            <button>
            {role === 'admin' ? (
              <Link className='btn btn-info btn-block' to='/manage'>
                Manage Users
            
              </Link>
                </p>
            <Link to='/about'>Go to About Page</Link>
            </div>
        );
    }
            
}