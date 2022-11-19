import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="section-text">
        <div className="section-text__title-centered">
          How can we help you with Anapp!
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="reader-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Become a Member </div>
              <div className="section-text__body">
                Connect wallet , make a transaction of 100 TFIL and become a
                member of XYZDAO.
              </div>
            </div>
          </div>

          <div className="service-card active">
            <div className="service-card__icon">
              <ion-icon name="wallet-outline" />
            </div>
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
            <div className="service-card__icon">
              <ion-icon name="chatbubble-ellipses-outline" />
            </div>
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
