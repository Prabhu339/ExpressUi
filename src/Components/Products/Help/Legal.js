import React from 'react'

const Legal = () => {
  return (
    <div className='partner container p-5'>
      <h3>Legal InfO</h3>
      <div>
        <details>
            <summary>I want to partner my restaurant with Swiggy</summary>
            <p>I want to partner my restaurant with Swiggy
Partner with us
SEND AN EMAIL
We will revert within 24-48 hrs</p>
        </details>

        <details>
            <summary>
            What are the mandatory documents needed to list my restaurant on Swiggy?
            </summary>
            <ul>
                <li>-  Copies of the below documents are mandatory</li>
                <li>-  FSSAI Licence OR FSSAI Acknowledgement</li>
                <li>-  Pan Card</li>
                <li>GSTIN Certificate</li>
                <li>-  Cancelled Cheque OR bank Passbook</li>
                <li>-  Menu</li>
            </ul>
        </details>

        <details>
            <summary>
            I want to opt-out from Google reserve
            </summary>
            <p>Send an email</p>
        </details>

        <details>
            <summary>
                
After I submit all documents, how long will it take for my restaurant to go live on Swiggy?
            </summary>
            <ol>
                <li>After all mandatory documents have been received and 
                    verified it takes upto 7-10 working days for the
                     onboarding to be completed and make your restaurant live on the platform.</li>
            </ol>
        </details>

        <details>
            <summary>
            How much commission will I be charged by Express?
            </summary>
            <p>The commission charges vary for different cities. You will be able to see the 
                commission applicable for you once the preliminary onboarding details have been filled</p>
        </details>

        <details>
            <summary>
            I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?
            </summary>
            <p>I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?
            FSSAI licence is a mandatory requirement according to the government’s
             policies. However, if you are yet to receive the licence at the time of
              onboarding, you can proceed with the 
            acknowledgement number which you will have received from FSSAI for your registration.</p>
        </details>
      </div>
    </div>
  )
}

export default Legal