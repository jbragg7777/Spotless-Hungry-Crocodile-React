import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3ImgAlt: 'Career Rejuvenation Coaching Image',
  feature1Description:
    'Helping clients navigate the complexities of relationships and dating with confidence and clarity. Guiding them to identify and attract healthy, fulfilling connections while staying true to their authentic selves.',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1712107652566-7b11b75a15a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI3NzYyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Love & Dating Coaching Image',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1611242133994-78696d90da8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI3NzYyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Providing practical strategies for achieving sustainable weight loss and cultivating a positive relationship with health and body image. Offering accountability and motivation to help clients break through barriers and celebrate their progress.',
  feature3Title: 'Career Rejuvenation Coaching',
  feature2ImgAlt: 'Weight Loss Coaching Image',
  feature1Title: 'Love & Dating Coaching',
  feature2Title: 'Weight Loss Coaching',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1614615344373-b9618151e684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI3NzYyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Supporting clients in rediscovering their professional passions, breaking free from career stagnation, and crafting new, exciting career paths. Helping individuals build the confidence to transition to roles that align with their talents, values, and aspirations.',
}

Features1.propTypes = {
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
}

export default Features1
