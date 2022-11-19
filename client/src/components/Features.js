import React from "react";

function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="section-text">
          <div className="section-text__title">
            Some of the best features Of Our App!
          </div>
          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">
                Power in your hand
              </div>
              <div className="section-text__body">
                You have the power to support your choice of content
              </div>
            </div>
            <div className="feature-box col-50">
              <div className="section-text__title-small">Extreme Security</div>
              <div className="section-text__body">
                we use the money from voting to secure content on filecoin
              </div>
            </div>
          </div>
          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">Earning</div>
              <div className="section-text__body">
                You receive a portion of the value that the content is producing
                when people watch the video you voted for.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
