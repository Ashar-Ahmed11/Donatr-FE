
import React from 'react';
import CountUp from 'react-countup';
import FirstOne from '../Images/House Loan.jpg';
import SecOne from '../Images/For house loan.jpg';
import asaanQarz13 from '../Images/newAkhuwat18.jpg'
import asaanQarz14 from '../Images/newAkhuwat19.jpg'
import { Helmet } from "react-helmet-async";
import ApplyLoanForm from './homeComponents/ApplyLoanForm'


const akhuwatHouseLoan = () => {
  return (
    <>
     <Helmet>
                                        <meta charSet="utf-8" />
                                        <title>Akhuwat House Loan</title>
                                        <meta name="description" content="Akhuwat House Loan offers interest-free financial assistance to help families build, buy, or renovate homes with an easy and transparent process in Pakistan." />
                                    </Helmet>
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto", fontSize:'22px' }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">With Akhuwat Foundation, you can make your dream of owning a home come true.</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        Getting your dream home is possible thanks to the Akhuwat Foundation. A lot of people can't afford a standard mortgage, which keeps them from becoming homeowners. Akhuwat's Housing Loan program gets rid of those problems by giving loans with no interest to people who need it the most.
        </p>
      </div>
            

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Loans for affordable and easy access to housing</h2>
          <p>
          Akhuwat Foundation makes the whole process easy and cheap, whether you want to buy a new home or upgrade the one you already have. A lot of Pakistanis have already been able to buy homes with the help of these loans with no interest.
          </p>
          <ul>
            <li>Unlike most home loans, which need collateral like land or other valuable items, Akhuwat's home loans don't need any kind of security. This means that more people can gain from the program, especially those who don't have land or money.</li>
            <li>Customized repayment plans are made based on your income and financial situation, which makes payments easier to handle. This structure is flexible, which helps people keep their finances in order while they work to buy a home.</li>
            <li>Akhuwat Foundation also works to improve financial access for low-income and underserved groups. Families can get safe homes, become more financially stable, and improve their general quality of life with these loans.</li>
            {/* <li>Making living conditions better:The main goal of Akhuwat Foundation's housing loan is to make families' lives better by giving them safe, secure, and nice places to live.</li> */}
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src={asaanQarz13}
            alt="Money Received"
            className="img-fluid wm-100 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING FAMILIES</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" /></h2>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Who Should Apply Right Away?</h2>
          <p className=''>
            All Pakistanis who need a safe place to live right away can get a loan from the Akhuwat Foundation. Individuals and families with low salaries who want to build, buy, or fix up a home can benefit greatly from these loans.
          </p>
          <ul>
            <li>Ideal for Low-Income Families: Made especially for low-income families and people who want to buy, build, or improve their home.</li>
            <li>Minimum papers Needed: Applicants only need to send in basic papers like a driver's license and proof of where they live.</li>
            <li>Strengthened by Community Involvement: Being active in your community and having good recommendations can help your loan application.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src={asaanQarz14}
            alt="Housing Help"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">HOMES BUILT</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={8000} duration={3} suffix="+" /></h2>
          </div>
        </div>
      </div>
      <ApplyLoanForm/>

      {/* Application Process Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-12">
          <h2 className="fw-bold mb-3 text-center">How to Get a Home Loan from the Akhuwat Foundation</h2>
          <ul>
            <li><strong>Make Sure You're Eligible:</strong> Make sure you are a Pakistani citizen who really needs help with living.</li>
            <li><strong>Get your papers ready:</strong> Get your driver's license, proof of income, and a short explanation of what kind of home you need—to build, buy, or fix up.</li>
            <li><strong>Send in your application:</strong> You can fill out and turn in your loan application at the Akhuwat Foundation center that is closest to you.</li>
            <li><strong>Review of the Application:</strong> The Akhuwat team will carefully look over your request. If accepted, you'll be told right away.</li>
            <li><strong>Get the loan amount:</strong> Once you're accepted, the money will be sent to you according to the loan terms you agreed to. This will let you start working on your home project.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default akhuwatHouseLoan;

