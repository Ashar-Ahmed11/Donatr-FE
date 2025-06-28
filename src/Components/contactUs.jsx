
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Contact Us – Akhuwat Foundation Loans</h1>

              <p className="mb-4">
              At Akhuwat Foundation Loan, we're dedicated to providing excellent customer service and making sure that your financial journey goes smoothly and without any problems. Our skilled team is ready to help you every step of the way, whether you're starting the loan application process, want to know more about what we have to offer, or need help with an ongoing request.
              </p>

              <p className="mb-4">
              Because your satisfaction is our top goal, we value your time and are committed to responding quickly and effectively to your concerns.
              </p>

             

              <h2 className="fw-bold mt-5 mb-4">Get in Touch With Us</h2>

              <div className="contact-methods">
                <div className="contact-method mb-4">
                  <h3 className="fw-bold">1. Send us an email</h3>
                  <p>
                  Do you have a question or need help? Write to our customer service team via email. We'll get back to you within 24 hours and make sure you get the help or information you need, whether it's about your application or something else.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">2. Call us</h3>
                  <p>
                  Would you rather talk to someone directly? Our service is open from 9 AM to 6 PM (Pakistan Standard Time) Monday through Friday. We're here to help if you have questions about loan types, eligibility requirements, or the progress of your application.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">3. Come to our office</h3>
                  <p>
                  You are welcome to come to our office, which is close to Islamabad. You can meet our team in person and talk to a loan expert one-on-one to get the information you need to make smart financial choices.
                  </p>
                </div>
              </div>

              <div className="office-address mb-4">
                <h2 className="fw-bold">Office Address: Dasti Loan</h2>
                <p>F-6, Islamabad, Islamabad Capital Territory, Pakistan.</p>
              </div>

              <div className="map-container mb-4 text-center p-5">
                <img 
                  src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/10/map-1536x860.png" 
                  alt="Office Location Map" 
                  className="img-fluid rounded  p-5" 
                />
              </div>

              <div className="quote-section mb-4">
                <h3 className="fw-bold">Get a free loan quote right now.</h3>
                <p>
                We're here to help you whether you're ready to apply or just want to know more about your choices. Get in touch with us to get a free, personalized loan advice. Our skilled staff will walk you through the application process step by step, answer all of your questions, and help you get the best loan terms. Dasti Loan wants to help you with your money problems by giving you personalized, interest-free loan options that fit your needs.
                </p>
                <p>Get in touch with us right away to start making your financial situation better.</p>
              </div>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3">
            <div
              className="sticky-top pr-3"
              style={{ top: "0", paddingRight: "22px" }}
            >
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;

