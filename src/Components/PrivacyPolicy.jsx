import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import asaanQarz18 from '../Images/newAkhuwat23.jpg'

const PrivacyPolicy = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: "22px" }}>
      <div className="row g-0">
        {/* Main Content */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Privacy Policy</h1>

              <p className="mb-4">
                We at Akhuwat Foundation Loan really appreciate the trust you put in us by giving us your personal information. We care very much about your privacy, and we will always keep things as safe and private as possible. This Privacy Policy tells you how we collect, use, and keep your personal information safe when you use our website or our services. You understand and agree to the rules in this policy when you use our platform.
              </p>

              <div className="my-5 text-center">
                <img
                  src={asaanQarz18}
                  alt="Soft Loan Pakistan"
                  className="img-fluid rounded shadow-sm"
                  style={{ width: "80%", height: "auto" }}
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">1. The Information We Gather</h2>

              <p className="mb-4">
                <strong>Personal Information:</strong> When you ask for a loan, we need to know your name, address, phone number, email address, CNIC, details about your income, and information about your bank account. Forms, phone calls, emails, or face-to-face talks can also be used to get more information.
              </p>

              <p className="mb-4">
                <strong>Non-Personal Information:</strong> Cookies and other tracking tools help us keep track of things like your IP address, browser type, device information, and how you use our website. This information doesn't allow us to identify you.
              </p>

              <h2 className="fw-bold mt-5 mb-4">2. How We Make Use Of Your Data</h2>

              <p className="mb-4">
                We use the information you give us to process loan requests, make sure you're eligible, and answer questions about your application. You can also choose not to receive promotional papers from us at any time. Additionally, the information you give us helps us follow the law and make our website work better.
              </p>

              <h2 className="fw-bold mt-5 mb-4">3. The Sharing of Data</h2>

              <p className="mb-4">
                We may give your information to trusted partners who help us process loans and provide other services connected to them. We may also give out information if the law says so or to protect users' rights. When a business changes, like when it merges or buys another, your info may be moved along with it. To market our products and services, we do not sell or rent out your personal information.
              </p>

              <h2 className="fw-bold mt-5 mb-4">4. Safety of Data</h2>

              <p className="mb-4">
                Your data is encrypted while it's being sent and kept safely. Only people who are authorized can get to sensitive info. Audits are done on a regular basis to find and fix security problems. Even though we take a lot of safety measures, no internet-based method is completely safe.
              </p>

              <h2 className="fw-bold mt-5 mb-4">5. Cookies and Technologies That Track You</h2>

              <p className="mb-4">
                We use cookies to see how people use our website, make it run better, and make your experience more unique. This includes showing you ads and material that is related to what you're interested in.
              </p>

              <h2 className="fw-bold mt-5 mb-4">6. Your Rights</h2>

              <p className="mb-4">
                You have the right to review, update, or correct your personal information. If you believe your data is incorrect, you can request a correction. To exercise these rights, please contact us using the information provided below.
              </p>

              <h2 className="fw-bold mt-5 mb-4">7. Data Retention</h2>

              <p className="mb-4">
                We retain your personal data only for as long as necessary to fulfill the services, comply with legal requirements, and maintain internal records.
              </p>

              <h2 className="fw-bold mt-5 mb-4">8. Links to Third-Party Websites</h2>

              <p className="mb-4">
                Our website may contain links to external sites. Please be aware that we are not responsible for the privacy practices of those websites. We encourage you to read their privacy policies separately.
              </p>

              <h2 className="fw-bold mt-5 mb-4">9. Policy Updates</h2>

              <p className="mb-4">
                We may revise this privacy policy occasionally. Significant changes will be communicated via updates on our website or through email notifications.
              </p>

              <h2 className="fw-bold mt-5 mb-4">10. Get in Touch</h2>

              <ul className="fw-light mx-5">
                <li>Email: support@AsaanQarzloanschemepk.com</li>
                <li>Phone: +92 0346 0760718</li>
                <li>Address: F-6, Islamabad, Islamabad Capital Territory, Pakistan.</li>
              </ul>

              <p className="text-muted mt-4">Last Updated: October 2024.</p>
            </article>
          </main>
        </div>

        {/* Sidebar */}
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

export default PrivacyPolicy;
