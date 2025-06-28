import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const TermsAndConditions = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: '22px' }}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Terms and Condition - Akhuwat Foundation Loan</h1>

              <p className="mb-4">
                Thanks for coming to Akhuwat Foundation Loan. If you use our website or services, you agree to follow the rules set out here. Please don't use our services or website if you don't agree to these terms.
              </p>

              <p className="mb-4">
                The Akhuwat Foundation Loan can change these Terms and Conditions at any time and without warning. You are responsible for checking them often for changes.
              </p>

              <h2 className="fw-bold mt-5 mb-4">1. What They Mean</h2>
              <p>You agree to look at our loan programs on our website when you use "Akhuwat Foundation Loan."</p>
              <p>The Akhuwat Foundation Loan team is called "We," "Us," or "Our."</p>
              <p>If you use the site or its banking services, "you" or "your" means that person.</p>

              <h2 className="fw-bold mt-5 mb-4">2. Using the Website</h2>
              <p>You agree that you are at least 18 years old and legally able to sign contracts when you use this website. You agree not to do anything bad, like spreading malware, trying to get in without permission, or using software to change the website.</p>

              <h2 className="fw-bold mt-5 mb-4">3. Help with loans</h2>
              <p>Akhuwat Foundation Loan helps people in Pakistan who are eligible by giving them money. You agree to give correct information when you apply, and you know that acceptance is not a given. The loan terms, such as how to pay back the loan and the interest rates that apply, will be made clear before the deal is finalized. Payment must be made on time as agreed.</p>

              <h2 className="fw-bold mt-5 mb-4">4. Conditions for Getting a Loan</h2>
              <p>To get in, you need to:</p>
              <ul className="fw-light mx-5">
                <li>Be a citizen or resident of Pakistan</li>
                <li>At least 18 years old</li>
                <li>Have a valid CNIC</li>
                <li>Have a job or a way to make money that can be verified.</li>
                <li>Give full and honest financial information</li>
              </ul>
              <p>If you don't meet these requirements, your application may be turned down.</p>

              <h2 className="fw-bold mt-5 mb-4">5. Paying back a loan</h2>
              <p>Once the loan is approved and sent to you, you have to pay it back in regular payments, usually once a month. You might have to pay late fees or have problems with your credit records if you miss payments. You can pay off your debt early without being penalized, and it may even lower your total interest costs.</p>

              <h2 className="fw-bold mt-5 mb-4">6. Rates of interest and other fees</h2>
              <p>Our loan rates are low and change based on the type of loan, the amount, and the length of the loan. Any fees that are involved, such as application, handling, or late payment fees, will be made clear ahead of time.</p>

              <h2 className="fw-bold mt-5 mb-4">7. Promise of Privacy</h2>
              <p>We only use the information you give us to process your loan request, make sure you're eligible, and stay in touch. We will never give your information to someone else unless the law says we have to.</p>

              <h2 className="fw-bold mt-5 mb-4">8. Links to other websites</h2>
              <p>For your convenience, our page may have links to other sites. Any problems that happen because of using these sites are not our fault and are not controlled by us.</p>

              <h2 className="fw-bold mt-5 mb-4">9. The rights to intellectual property</h2>
              <p>Akhuwat Foundation Loan owns and is protected by intellectual property rules all of the content on its website, including text, images, and branding. Without our permission, you may not use this information again or copy it for commercial purposes.</p>

              <h2 className="fw-bold mt-5 mb-4">10. Activities Not Allowed</h2>
              <ul className="fw-light mx-5">
                <li>Give out false or inaccurate information</li>
                <li>Take part in illegal activities like fraud or moving money</li>
                <li>Hack the site, change it, or add software that isn't supposed to be there.</li>
                <li>Get to someone else's secret information</li>
                <li>Take advantage of the opportunity for your own gain</li>
              </ul>
              <p>Not following these rules could get you fired or even in trouble with the law.</p>

              <h2 className="fw-bold mt-5 mb-4">11. Limitation of Loss</h2>
              <p>We try to provide services that you can rely on, but we can't promise that they will always work or be correct. If you use our services and lose something, have problems with your info, or get hurt, we're not responsible.</p>

              <h2 className="fw-bold mt-5 mb-4">12. Closing the account</h2>
              <p>If you break these rules, commit fraud, or don't pay back your loan, your account could be stopped or suspended. You will still be responsible for any past-due bills.</p>

              <h2 className="fw-bold mt-5 mb-4">13. Laws that apply</h2>
              <p>The rules of Pakistan say what these Terms and Conditions mean. The courts in Pakistan will settle any disagreements.</p>

              <h2 className="fw-bold mt-5 mb-4">14. Changes to the terms</h2>
              <p>These terms could be changed at any time. This page will have the most recent form. If you keep using our services, it means you agree to the new rules.</p>

              <h2 className="fw-bold mt-5 mb-4">15. Contact Us</h2>
              <p>If you have any questions, issues, or requests about these Terms and Conditions, please get in touch with us.</p>
              <p>Email: <a href="mailto:support@AsaanQarzloanschemepk.com">support@AsaanQarzloanschemepk.com</a></p>
              <p>Phone: +92 340 1003463</p>
              <p>Office Address: F-6, Islamabad, Islamabad Capital Territory, Pakistan</p>

              <p className="mt-4 text-muted">Last Updated: October 2024</p>
              <p className="mt-4">We're glad you picked Akhuwat Foundation Loan. We are committed to providing you with clear and reliable financial services.</p>
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

export default TermsAndConditions;
