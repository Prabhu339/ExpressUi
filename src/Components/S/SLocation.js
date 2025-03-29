import React from 'react'

const Location = () => {
    const loco=[
        {
          "city": "New York",
          "country": "USA"
        },
        {
          "city": "London",
          "country": "UK"
        },
        {
          "city": "Mumbai",
          "country": "India"
        },
        {
          "city": "Tokyo",
          "country": "Japan"
        },
        {
          "city": "Paris",
          "country": "France"
        },
        {
          "city": "Sydney",
          "country": "Australia"
        },
        {
          "city": "Los Angeles",
          "country": "USA"
        },
        {
          "city": "Shanghai",
          "country": "China"
        },
        {
          "city": "Berlin",
          "country": "Germany"
        },
        {
          "city": "Dubai",
          "country": "UAE"
        },
        {
          "city": "Singapore",
          "country": "Singapore"
        },
        {
          "city": "Moscow",
          "country": "Russia"
        },
        {
          "city": "Chicago",
          "country": "USA"
        },
        {
          "city": "Toronto",
          "country": "Canada"
        },
        {
          "city": "Delhi",
          "country": "India"
        },
        {
          "city": "Bangkok",
          "country": "Thailand"
        },
        {
          "city": "Hong Kong",
          "country": "China"
        },
        {
          "city": "Istanbul",
          "country": "Turkey"
        },
        {
          "city": "Seoul",
          "country": "South Korea"
        },
        {
          "city": "São Paulo",
          "country": "Brazil"
        }
      ]
      
  return (
    <div>
        <div className='container p-5'>
          <h2 className=''>Cities with food delivery</h2>
            <div >
                {loco.map((dt,index)=>{
                    return(
                        <div className='row flexy text-center'>
                          <div className=''>
                          <div  className='card flex p-2 m-2 text-center'key={index}>
                          <p>order food online in</p>
                            <h5>{dt.city}</h5>
                        </div>

                          </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Location