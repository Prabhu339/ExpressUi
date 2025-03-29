import React from 'react'

const City = () => {
    const village = [
            {
              "city": "Amritsar",
              "restaurant": "Kesar Da Dhaba",
              "cuisine": "Punjabi"
            },
            {
              "city": "Lucknow",
              "restaurant": "Tunday Kababi",
              "cuisine": "Awadhi"
            },
            {
              "city": "Varanasi",
              "restaurant": "Kashi Chat Bhandar",
              "cuisine": "Street Food"
            },
            {
              "city": "Surat",
              "restaurant": "Sasumaa Gujarati Thali",
              "cuisine": "Gujarati Thali"
            },
            {
              "city": "Agra",
              "restaurant": "Pinch of Spice",
              "cuisine": "North Indian"
            },
            {
              "city": "Chandigarh",
              "restaurant": "Virgin Courtyard",
              "cuisine": "Italian"
            },
            {
              "city": "Indore",
              "restaurant": "Sarafa Bazaar",
              "cuisine": "Street Food"
            },
            {
              "city": "Udaipur",
              "restaurant": "Ambrai",
              "cuisine": "Rajasthani"
            },
            {
              "city": "Kochi",
              "restaurant": "Dhe Puttu",
              "cuisine": "Kerala"
            },
            {
              "city": "Thiruvananthapuram",
              "restaurant": "Villa Maya",
              "cuisine": "Fusion"
            },
            {
              "city": "Mysuru",
              "restaurant": "Mylari Hotel",
              "cuisine": "South Indian"
            },
            {
              "city": "Nagpur",
              "restaurant": "Barbeque Nation",
              "cuisine": "Barbecue"
            },
            {
              "city": "Vadodara",
              "restaurant": "Mandap",
              "cuisine": "Gujarati"
            },
            {
              "city": "Bhopal",
              "restaurant": "Manohar Dairy & Restaurant",
              "cuisine": "North Indian & Sweets"
            },
            {
              "city": "Guwahati",
              "restaurant": "Paradise",
              "cuisine": "Assamese"
            },
            {
              "city": "Shillong",
              "restaurant": "Cafe Shillong",
              "cuisine": "Continental & Khasi"
            },
            {
              "city": "Pondicherry",
              "restaurant": "Villa Shanti",
              "cuisine": "French & Indian"
            },
            {
              "city": "Patna",
              "restaurant": "Bansi Vihar",
              "cuisine": "South Indian"
            },
            {
              "city": "Dehradun",
              "restaurant": "Kalsang",
              "cuisine": "Tibetan & Chinese"
            },
            {
              "city": "Rishikesh",
              "restaurant": "The 60's Cafe",
              "cuisine": "Vegetarian Continental"}
            
          ]
          
    
  return (
   <>
    <div className='container p-5'>
        <h3><b>Best Places to Eat Across Cities</b></h3>

        {
            village.map((dt,index)=>{
                return(
                    <div className='row flexy text-center'>
                      <div className=''>
                      <div  className='card flex m-1 text-center'key={index}>
                      <p className='p-2 m-2 bold'>Best restaurant in <br></br><span>{dt.city}</span></p>
                        
                    </div>
                   

                      </div>
                    </div>
                )
            })
        }
    </div>

  
       
   </>
   
  )
}

export default City