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
       
          <h2 className='text-danger bg-dark'><marquee>Cities with food delivery</marquee></h2>
            <div className='row container-fluid text-center'>
                {loco.map((dt,index)=>{
                    return(
                      
                         
                          <div  className='col-md-4 col-sm-4 border mb-1 mt-1  col-sm-4 col-lg-2 col-xl-2 col-xxl-2 'key={index}>
                         order food  in<br></br>
                            <b>{dt.city}</b>
                        </div>

                         
                       
                    )
                })}
            </div>
        
    </div>
  )
}

export default Location