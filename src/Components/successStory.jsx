
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import asaanQarz6 from '../Images/newAkhuwat11.jpg'
import asaanQarz7 from '../Images/newAkhuwat12.jpg'
import asaanQarz8 from '../Images/newAkhuwat13.jpg'
// import Infograph from '../Images/Infograph.png'
// import IslamicInfo from '../Images/Interest-Free Micro Loans.png'
// import getLoan from '../Images/Add a subheading.png'

const SuccessStory = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light"style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? 'col-12' : 'col-lg-9'}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Succes Story:How loans from the Akhuwat Foundation changed a person's life</h1>
              
              <p className="mb-4">
              In today's fast-paced world, being financially stable is very important for helping people reach their goals and dreams. Akhuwat Foundation does more than just give people money; it gives them the tools they need to make their futures better.

              </p>
              
              <p className="mb-4">
              This moving success story shows how Akhuwat Foundation Loans have made a difference in people's lives all over Pakistan. Akhuwat keeps making dreams come true by making loans easy to get, reasonable, and clear—one life at a time—for everyone from business owners and students to people who are having trouble with money. 

              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz6}
                  alt="Akhuwat Foundation Loan Logo" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">1. Getting ready for financial empowerment</h2>
              
              <p className="mb-4">
              When it started in 2024, the Akhuwat Foundation Loan Program was made to help regular Pakistanis who were having trouble with money. Dr. Amjad Shah, the company's founder, saw that standard lending systems had problems, like long application processes, high interest rates, and strict rules about who could get credit, which kept many people from getting it. As a reaction, he came up with a cheaper and more inclusive way to handle money.
              </p>
              
              <p className="mb-4">
              The program was based on the ideas of making things easy, fair, and open to everyone. It had easy-to-understand steps, low-interest loans, and quick decisions. The Akhuwat Foundation's main goal from the start was to give people from all walks of life more power. People quickly trusted this method, which helped thousands of people take charge of their finances and make their lives better.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">2:  The Journey of a Student: Making Dreams Come True</h2>
              
              <p className="mb-4">
              An intelligent kid from Lahore named Haseeb Ahmed wanted to become an engineer. His family had trouble paying for college, even though he did very well in school, because of money problems. This put his future at risk. When he found the Akhuwat Foundation, everything changed.

              </p>
              
              <p className="mb-4">
              Haseeb could get a student loan from Akhuwat, which was easy on the wallet, required little papers, and had flexible payment terms. The application process was easy, and he got his cash within 24 hours, so he could keep studying right away.
              </p>
              
              <p className="mb-4">
              Haseeb finally graduated from one of the best engineering schools in Pakistan. He is now a well-known and respected civil engineer. His story shows how the Akhuwat Foundation helps people turn their money problems into opportunities and their dreams into reality. 
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz7}
                  alt="Akhuwat Foundation Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">3: Giving Small Businesses the Tools They Need to Grow: Sarah's Story</h2>
              
              <p className="mb-4">
               Sarah's life changed for the better when another shop owner put her in touch with Akhuwat Foundation Loans. She went to a nearby Akhuwat Loan Center and was interested in the easy-to-meet requirements and variety of loan choices designed for business owners. The application was easy; it only needed a few pieces of paper and didn't ask for any complicated promises. The loan was given to her right away.
              </p>
              
              <p className="mb-4">
              She used the money to fix up her shop and buy new things for it. Her income quickly doubled, and more people in the area started going to her shop.
              </p>
              
              <p className="mb-4">
              The quick and helpful process that Akhuwat Foundation offered was a big part of how Sarah's struggling shop turned into a successful community business.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">4:Help with money right away—emergency aid when it's needed Most</h2>
              
              <p className="mb-4">
              Unexpected things can happen in life, and money problems can happen at any time. A lot of people in Pakistan use Akhuwat Foundation Loans to get quick and reliable help when things are tough.


              </p>
              
              <p className="mb-4">
              This is shown by Ali's story. He asked Akhuwat Foundation for an emergency loan because he had no funds and had to pay for hospital bills all of a sudden. His request was quickly granted, and the money was sent to him right away.



              </p>
              
              <p className="mb-4">
              Ali was able to handle the problem without going deeper into debt because the terms of the loan were flexible. His health is good and he has enough money to live on thanks to the Akhuwat Foundation's help during one of the hardest times in his life.
              </p>
              
              {/* <p className="mb-4">
              Ali was able to handle his position without getting deeper in debt because the terms of his loans were flexible. He is now financially comfortable and in good health, and he is thankful that Akhuwat Foundation helped him through one of the hardest times in his life.
              </p> */}
    
              <h2 className="fw-bold mt-5 mb-4">5: Making home ownership possible—Farhan's dream came true</h2>
              
              <p className="mb-4">
              Many Pakistanis have dreamed of having a home their whole lives, but rising property prices make it seem impossible. The Akhuwat Foundation's home loans are easy to get and easy to pay back, which has helped many families realize their dream.
              </p>
              
              <p className="mb-4">
              A middle-class worker from Rawalpindi named Farhan Sheikh had been putting money away for years but still couldn't get enough for a house. He then asked for help from the Akhuwat Foundation.
              </p>
              
              <p className="mb-4">
              The process of getting a loan was quick and easy. Farhan got the money he needed for a down payment in less than a week. Now that he and his family own their own house, they are living the dream that seemed impossible at first.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz8}
                  alt="Akhuwat Foundation Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">6: Ghulam's Change Making Agriculture Stronger with the Akhuwat Foundation</h2>
              
              <p className="mb-4">
              Akhuwat Foundation Loans don't just help workers in cities; they also help people in rural areas by funding farming. A lot of farmers in Pakistan have trouble getting the quality seeds, fertilizers, and modern tools they need to increase their crops' output and income.

              </p>
              
              <p className="mb-4">
              Ghulam Abbas, a farmer from Multan with a lot of knowledge, had the same problems. Even though he worked hard for years, his wages stayed low because of old ways of farming. He knew that modern tools would help him be more productive and support his family better, but traditional banks wouldn't lend him money because they thought farming was too risky.
              </p>
              
              <p className="mb-4">
              That is when Ghulam went to the Akhuwat Foundation. The loan was given to him in less than a week. He used the money to buy better seeds, set up a modern irrigation system, and get better tools for growing. Because of this, his crop tripled, and he made a lot more money.

              </p>
    
              <h2 className="fw-bold mt-5 mb-4">The Akhuwat Foundation is really making a difference all over Pakistan.</h2>
              
              <p className="mb-4">
              The Akhuwat Foundation Loan has been changing the lives of people all over the country, from students and business owners to farms and families. Haseeb, Sarah, Ali, Farhan, and Ghulam's stories show how fair and easy lending can open doors to chances and make the future better.
              </p>
              
              <p className="mb-4">
              The Akhuwat Foundation Loan Scheme 2025 is still dedicated to giving people clear, low-cost money solutions that get rid of hurdles and give people power. We have a clear goal: to give every Pakistani the tools they need for a better; safer tomorrow.


              </p>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3 ">
            <div className="sticky-top pr-3" style={{ top: '0', paddingRight:'22px' }}>
              <Sidebar />
            </div>
          </div>
        )}
        
        
      </div>
    </div>
  );
};

export default SuccessStory;

