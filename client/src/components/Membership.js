import React from "react";

function Services() {
  return (
    <section id="services" style = {{marginBottom: "20%"}}>
      <div className="section-text">
        <div className="section-text__title-centered">
          What xyz DAO brings at the table!
        </div>
        <div className="service-cards">
          <div className="service-card">
          <span style = {{marginBottom: "18%"}}><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/56/null/external-membership-night-club-flaticons-lineal-color-flat-icons-3.png"/></span>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Become a Member </div>
              <div className="section-text__body">
                Connect wallet , make a transaction of 100 TFIL and become a
                member of XYZDAO.
              </div>
            </div>
          </div>
          
          <div className="service-card active">
           <span style = {{marginBottom: "18%"}}><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/56/null/external-partnership-recruitment-agency-flaticons-lineal-color-flat-icons.png"/></span>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Perks of being a Member
              </div>
              <div className="section-text__body">
                You can vote for the video content you like and can watch it
                anytime and also earn some money on it.
              </div>
            </div>
          </div>

          <div className="service-card">
          <span style = {{marginBottom: "18%"}}><img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/56/null/external-content-influencer-marketing-wanicon-lineal-color-wanicon.png"/></span>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Upload content</div>
              <div className="section-text__body">
                Once you are a member you can upload the content at just 20 TFIL
                and earn income on it if you get votes.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
