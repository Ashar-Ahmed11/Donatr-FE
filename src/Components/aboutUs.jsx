
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Infographic from '../Images/Infograph.png'
// import aboutUsImg from '../Images/Akhuwat Foundation loan service.jpg'
import asaanQarz15 from '../Images/newAkhuwat20.jpg'
import asaanQarz16 from '../Images/newAkhuwat21.jpg'
import asaanQarz17 from '../Images/newAkhuwat22.jpg'

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'21px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">About Us</h1>

              <p className="mb-4">
              Welcome to Akhuwat Foundation Loan, your reliable source for easy access to loans in Pakistan. The Foundation was started in 2023 by Dr. Amjad Saqib with the goal of giving people across the country low-interest loans they can pay. If you're trying to reach personal goals or grow your business, Akhuwat is here to help. You can count on us to provide clear, reliable, and effective financial services that are tailored to your specific needs.
              </p>
              <div className="my-5 text-center p-4">
                <img 
                  src={asaanQarz15}
                  alt="Akhuwat Foundation Loan Logo" 
                  className="img-fluid rounded shadow-sm mw-100 h-100 card-img-top" 
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">Activities</h2>

              <p className="mb-4">
              At Akhuwat Foundation Loan, our goal is to help people who require cash help the most. We think that everyone, no matter how much money they make, should be able to get loans that are reasonable. We help people take charge of their financial future and improve their general health by giving them low-interest loans with flexible payment plans.

              </p>

              <p className="mb-4">
                We know how hard it can be to get a loan, especially for people in Pakistan who are having money problems. That's why we're dedicated to providing services that are clear, quick, and easy to understand. Our goal is to get rid of financial barriers by giving everyone options that are made to fit their specific needs.

              </p>

              <h2 className="fw-bold mt-5 mb-4">Why Should You Get an Akhuwat Foundation Loan?</h2>

              <ol className="fw-light mx-5">
                <li>Quick Process for Approving</li>
                <p>We know how important it is to have money quickly. Our easy-to-use application process makes sure you get approved quickly, without the wait times that come with standard banking.</p>
                <li>Different Loan Choices</li>
                <p>We offer different types of loans to meet your needs, whether you need money for personal reasons, to grow your business, to go to school, or because of an emergency.</p>
                <li>Fully open and honest</li>
                <p>Honesty is important to us. There are no secret terms or conditions because everything is made clear from the start.</p>
                <li>Customized customer service</li>
                <p>We spend time getting to know you and your finances so that we can give you the best loan amount and payment plan.</p>
              </ol>

              <h2 className="fw-bold mt-5 mb-4">Get to know our founder, Dr. Amjad Saqib.</h2>

              <p className="mb-4">
              Dr. Amjad Saqib is a well-known social entrepreneur and activist who came up with the idea for Akhuwat Foundation Loan. He has worked all his life to help underserved communities get access to financial services and has been a strong supporter of programs in Pakistan that try to help the poor. Akhuwat Foundation Loan has become a sign of chance under his leadership, giving long-term financial help to thousands of people across the country.

              </p>
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz16}
                  alt="Akhuwat Foundation Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
              <p className="mb-4">
              The founder of Akhuwat Foundation Loan, Dr. Amjad Saqib, is a kind and committed person who wants to make the world a better place. His leadership and foresight have been very important to the success of the company. Dr. Saqib created Akhuwat Foundation Loan so that everyone could get easy, fair, and accessible financial help. He did this because he had a deep knowledge of Pakistan's economic problems and a long-standing commitment to social justice. His beliefs still shape our purpose and the way we help people all over the country.
              </p>


              <h2 className="fw-bold mt-5 mb-4">What We Stand For</h2>

              <ul className="fw-light mx-5">
                <li>Transparency: We promise to be honest and open with everyone we deal with. We work to build trust with everyone we help by being clear about everything, from loan terms to contact</li>
                <li>Customer-Centric Approach: We put your wants first. Our main goal is to give you personalized help and suggest financial options that work best for you.</li>
                <li>Innovation: To better serve our clients and meet their changing financial needs, we are always adding new tools and technologies</li>
                <li>Impact on society: Our goal is bigger than just giving money. We want to improve whole communities by promoting economic growth that benefits everyone and providing dependable, long-term financial answers.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Personal loans are one of our financial services.</h2>

              <p className="mb-4">
                Flexible funds to help with things like school, health care, or situations that come up out of the blue.
              </p>

              <ul className="fw-light mx-5">
                <li>Loans for people</li>
                <p >Flexible funding is available to help with things like school, medical bills, or important personal costs.</p>
                <li>Business loans</li>
                <p>Business loans give founders and small businesses the money they need to start up, run, or grow.</p>
                <li>Loans for school</li>
                <p>There are affordable, interest-free loan choices for students who want to do well in school.</p>
                <li>Instant Loans</li>
                <p>Quick and reliable cash help for emergencies or things that didn't go as planned.</p>
                <li>Loans with no interest</li>
                <p>Shariah-compliant loans designed to help people and families with low incomes without making them pay a lot in interest.</p>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Our Promise to Pakistan</h2>

              <p className="mb-4">
              Akhuwat Foundation Loan is proud to have a mission-driven method that is based in Pakistan. Our goal is to make people's lives better and the economy stronger by making financial services more cheap, easy to get to, and clear.
              </p>

              <p className="mb-4">
              We're here to help you whether you're starting a business, paying for school, or dealing with a cash emergency. As we give out loans, we get closer to making Pakistan better and more open to everyone.
              </p>
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz17}
                  alt="Akhuwat Foundation Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm card-img-top" 
                />
              </div>
              <h2 className="fw-bold mt-5 mb-4">Join the Akhuwat Foundation Loan Family</h2>

              <p className="mb-4">
              When you choose Akhuwat Foundation Loan, you're not just getting money—you're also getting a reliable partner who will help you every step of the way. Our goal is to help you reach your financial goals and follow your dreams with honesty, confidence, and clarity.
              </p>

              <p className="mb-4">
              Get your loan today and see what makes Akhuwat different. It's never been easier to make your dreams come true with services that are quick, safe, and reliable.

              </p>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3 ">
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

export default AboutUs;

