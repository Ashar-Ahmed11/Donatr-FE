import React from 'react'
import asaanQarz9 from '../Images/newAkhuwat14.jpg'
import asaanQarz10 from '../Images/newAkhuwat15.jpg'
import FirstOne from '../Images/House Loan.jpg';
import SecOne from '../Images/For house loan.jpg';
import asaanQarz13 from '../Images/newAkhuwat18.jpg'
import asaanQarz14 from '../Images/newAkhuwat19.jpg'
import myImg from '../Images/Loan Scheme.jpg'
import asaanQarz11 from '../Images/newAkhuwat16.jpg'
import asaanQarz12 from '../Images/newAkhuwat17.jpg'
import CountUp from 'react-countup';
import SecImg from '../Images/12.jpg'
import { Helmet } from "react-helmet-async";
import ApplyLoanForm from './homeComponents/ApplyLoanForm'

const akhuwatFoundationContactNumber = () => {
  return (
    <>
     <Helmet>
                    <meta charSet="utf-8" />
                    <title>Akhuwat Foundation Contact Number</title>
                    <meta name="description" content="Looking for the Akhuwat Foundation contact number? Get official phone numbers, office details, and guidance for interest-free loan applications in Pakistan." />
                </Helmet>
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1100px", margin: "0 auto", fontSize: '22px' }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Foundation Business Loan: Giving Pakistani Business Owners the Tools They Need</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        The Akhuwat Foundation company Loan is meant to help Pakistani company owners who want to start or grow their companies. It can be hard to start or grow a business, especially if you don't have enough money. Akhuwat's interest-free loan program is a great option for people who might not be able to get loans from regular banks. The Foundation wants to help business owners become financially independent and grow Pakistan's economy at the same time.
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          
The Akhuwat Foundation's loan program can help you make your business dreams come true, whether you want to open a store, start a service business, or invest in small-scale manufacturing.
        </p>
      </div>
            <ApplyLoanForm/>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Why Should You Get an Akhuwat Business Loan?</h2>
          <p>You can get money without putting up any collateral, which makes the process safer and easier to do.</p>
          <ul>
            <li><strong>Interest-Free Financing:</strong> You can grow your business without having to worry about high interest rates that can slow you down.</li>
            <li><strong>Flexible Repayment Plans:</strong> Payments are split up into installments that work with the way your business makes money, so you can pay back the loan without stress.</li>
            <li><strong>Support for Small Businesses:</strong> This helps create jobs, improve neighborhoods, and encourage people to become entrepreneurs.</li>
            <li><strong>Promoting Financial Inclusion:</strong> Gives people who aren't getting enough chances, making the economy more fair and open to everyone.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 ">
          <img
            src={asaanQarz11}
            alt="Business Loan Support"
            className="img-fluid wm-105 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING ENTREPRENEURS</p>
            <h2 className="display-4 text-center fw-bold">
  <CountUp end={14} duration={3} suffix="K+" />
</h2>
          </div>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3"> Easy Steps to Get a Business Loan from the Akhuwat Foundation</h2>
          <p>
          Make sure you meet the most basic requirements to apply.
          </p>
          <ul>
            <li><strong>Make sure you are eligible:</strong> Check first to see if you meet the requirements to apply for an Akhuwat Foundation business loan. This makes sure you're qualified before you go any further.</li>
            <li><strong>Make sure your papers are ready:</strong> Get together all the papers you'll need, like your CNIC, proof of where you live, and important business information. The application process will go faster if you are ready. </li>
            <li><strong>Fill out the application:</strong> Fill out and send in your loan application once all of your paperwork is ready. Make sure that all the information is correct to avoid any delays.</li>
            <li><strong>Authorization and Payment:</strong> If your application is accepted after being reviewed, the loan amount will be sent to you right away, so you can use the money right away.</li>
            <li><strong>Paying back:</strong> Follow the plan you agreed to and pay back the loan in easy, regular payments. This helps you stay responsible with your money and keep your future support options open.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6  p-3">
          <img
            src={asaanQarz12}
            alt="Entrepreneur Support"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">BUSINESSES SUPPORTED</p>
            <h2 className="display-4 text-center fw-bold">
  <CountUp end={8000} duration={3} suffix="+" />
</h2>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Why Should You Get a Business Loan from Akhuwat Foundation?</h2>
          <p>
            The business loans from the Akhuwat Foundation are designed to help entrepreneurs at all stages, whether they are starting a new business or growing a current one. Akhuwat takes away financial barriers by providing interest-free loans without security. This gives people the power to fully control their business journey.
          </p>
          <p>
            These loans don't just help businesses grow; they also help neighborhoods by making jobs available, boosting local economies, and making everyone in Pakistan better off.
          </p>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Take part in the Akhuwat Movement</h2>
          <p>
            Are you ready to grow your business? You can reach your business goals with Akhuwat Foundation Business Loans. You can start your path to success right away by going to the Akhuwat Foundation center closest to you or applying online.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default akhuwatFoundationContactNumber
