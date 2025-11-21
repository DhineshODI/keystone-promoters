import { useState } from "react";

export default function NriFaq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      title: "What is the possession date for this project?",
      content:
        "The project is scheduled for handover by December 2026. All construction stages are progressing as per the approved timeline.",
    },
    {
      title: "Is bank loan available for this property?",
      content:
        "Yes, leading banks such as SBI, HDFC, ICICI, Axis Bank and LIC Housing Finance have approved this project for home loans.",
    },
    {
      title: "What amenities are included in the community?",
      content:
        "The project includes a clubhouse, swimming pool, gym, children's play area, landscaped gardens, walking tracks, CCTV surveillance, and 24x7 security.",
    },
    {
      title: "Is covered car parking available?",
      content:
        "Yes, each apartment comes with dedicated covered car parking. Visitor parking is also available inside the premises.",
    },
  ];

  return (
    <>
      <div className="nrifaq">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="lowconatinersection">
            <div className="faqflexdiv">
              <div className="onefaqnriconatiner">
                <p className="mainheadingText ">FAQs</p>
                <h5 className="secondHeadingText ">
                  Your Questions Answered With Clarity Here
                </h5>

                <p className="subHeadingText ">
                  Find quick answers to common queries about our projects,
                  process, pricing and customer support
                </p>

                <div className="NriPagebutton">
                  <button>Enquire Now</button>
                </div>
              </div>

              <div className="twofaqnriconatiner">
                {/* <ul>
                  <li>
                    <div className="faqnriconatiner active">
                      <h4>Lorem ipsum is simply dummy text of the printing </h4>
                      <p className="subHeadingText ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia sequi iste corrupti fuga accusamus blanditiis
                        cumque illum eligendi praesentium ullam quae, odit
                        perspiciatis molestiae iure necessitatibus ducimus
                        expedita odio dolorum!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="faqnriconatiner">
                      <h4>Lorem ipsum is simply dummy text of the printing </h4>
                  
                    </div>
                  </li>
                  <li>
                    <div className="faqnriconatiner">
                      <h4>Lorem ipsum is simply dummy text of the printing </h4>
                      <p className="subHeadingText ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia sequi iste corrupti fuga accusamus blanditiis
                        cumque illum eligendi praesentium ullam quae, odit
                        perspiciatis molestiae iure necessitatibus ducimus
                        expedita odio dolorum!
                      </p>
                    </div>
                  </li>
                </ul> */}
                <ul>
                  {faqData.map((item, index) => (
                    <li key={index} onClick={() => toggleFAQ(index)}>
                      <div
                        className={`faqnriconatiner ${
                          activeIndex === index ? "active" : ""
                        }`}
                      >
                        <h4>{item.title}</h4>

                        {activeIndex === index && (
                          <p className="subHeadingText">{item.content}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
