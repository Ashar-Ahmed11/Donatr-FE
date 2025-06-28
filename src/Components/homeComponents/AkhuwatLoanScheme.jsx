import React from 'react';
import asaanQarz3 from '../../Images/newAkhuwat10.jpg'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Credit Plan for the Akhuwat Foundation</h1>
            
            <p className="mb-4 fw-bold mt-1">
            The Akhuwat Foundation has a payment system that is easy to understand and open to everyone. Getting financial help is quick and easy because there isn't much paperwork involved and the return process is easy. It is one of the most trusted choices in Pakistan because the interest rates are low or even free.
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              The team at Akhuwat Foundation's main office is always ready to help you if you need advice or support. Their hardworking and helpful staff makes sure that everything goes smoothly and without any stress.
              </p>
            </div>
          </div>
          
          <div className="col-lg-7 mt-5">
            <img 
              src={asaanQarz3 }
              alt="Akhuwat Foundation Loan Scheme Details in Urdu" 
              className="card-img-top "
              // style={{height:"500px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default AkhuwatLoanScheme;