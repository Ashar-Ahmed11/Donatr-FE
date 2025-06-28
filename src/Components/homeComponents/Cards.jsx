import React from 'react'

const Cards = () => {
  const color = "#108515"
  return (

    <div className='' style={{ backgroundColor: '#f7f8f9' }}>
      <div className='container text-center' >
      {/* <p className='w-70% text-center'>Akhuwat Foundation LOAN</p> */}
      <p className='w-70% text-center' style={{paddingTop:'26px'}}>Loan to the Akhuwat Foundation</p>
      
      <h1 ><b>What We Offer</b></h1>
        <h1><b>Sign up now to take the first step toward a better tomorrow.</b></h1>
        <div className="row mt-5 d-flex justify-content-center flex-wrap">
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-money" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Akhuwat Foundation offers personal loans</h5>
                <p className="card-text">For individuals, Akhuwat Foundation provides loans of up to Rs. 2.5 million. Based on your income, credit history, debt-to-income ratio, and employment situation, the loan amount is decided. Potential applicants must be at least 24 years old and no more than 60 years old. In real time, the Akhuwat Foundation's website gives you information about the state of your loan application and keeps you up to date throughout the process.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-suitcase" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Business Loan from the Akhuwat Foundation</h5>
                <p className="card-text">You can apply for a business loan online from your office with Akhuwat Foundation, which makes the process easier. These loans are meant to help with short-term cash flow problems, and choices on approval are usually made within a few hours. The simplified application only needs a small amount of paperwork, so you can focus on building your business without having to wait around.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-eye" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Loan for a house at Akhuwat.</h5>
                <p className="card-text">The Akhuwat Foundation in Pakistan helps people buy, build, or fix up their homes by giving them cash. The Akhuwat Foundation Home Loan is a great choice for people who need quick and easy money for their housing needs. It's easy to apply for and the money is sent out quickly.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4 mb-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-suitcase" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Loan for a wedding at Akhuwat Foundation</h5>
                <p className="card-text">Wedding loans from the Akhuwat Foundation can help you pay for all of your wedding costs and make sure everything goes smoothly on your big day. You can borrow between PKR 500,000 and PKR 6,000,000, and you have 10 to 36 months to pay it back. These loans are protected, and repeat customers usually get their money within 24 hours. This makes managing your wedding budget easy and stress-free.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4 mb-4" >
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-refresh" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">How to Get a Car Loan in 3 Easy Steps
                </h5>
                <p className="card-text">The Akhuwat Foundation offers car loans with interest rates as low as 1% per year, which cover the full price of the car when it is first bought. With different ways to pay back the loan, you can pick a plan that works with your budget. The easy application method makes sure that you get approved quickly, and current customers usually get their money within 48 hours. With Akhuwat Foundation, getting your dream car is easy and doesn't cause you any trouble.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
