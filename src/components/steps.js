import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps-actions">
              <button className="thq-button-filled thq-button-animated steps-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text15 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text17 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text18 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text21 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text23 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step4Description:
    'Benefit from continuous guidance, accountability, and encouragement throughout your journey.',
  step2Description:
    'Receive a personalized coaching plan tailored to your specific needs and aspirations.',
  step3Title: 'Actionable Strategies',
  step4Title: 'Ongoing Support',
  step1Description:
    'Schedule a one-on-one session with Justin Bragg to discuss your goals and challenges.',
  step1Title: 'Initial Consultation',
  step2Title: 'Customized Coaching Plan',
  step3Description:
    'Implement practical tools and steps provided by Delo Plenty to make tangible progress.',
}

Steps.propTypes = {
  step4Description: PropTypes.string,
  step2Description: PropTypes.string,
  step3Title: PropTypes.string,
  step4Title: PropTypes.string,
  step1Description: PropTypes.string,
  step1Title: PropTypes.string,
  step2Title: PropTypes.string,
  step3Description: PropTypes.string,
}

export default Steps
