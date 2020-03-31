import React, { Component } from 'react';

class Page extends Component
{
    render(){
        return(
            <div className="container mt-3">
                <h1 className='text-danger'>Error : 404</h1>
                <h3 className="text-info">Page doesn't exist</h3>
            </div>
        );
    }
}

export default Page