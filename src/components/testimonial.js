import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  review2:
    "Justin's coaching has been invaluable in helping me revitalize my career. His insights and strategies have given me the confidence to make significant changes and pursue new opportunities.",
  author4Alt: 'Image of David Roberts',
  author4Name: 'David Roberts',
  heading1: 'Testimonials',
  author4Src:
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI3NzYxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of Samantha Smith',
  author1Src:
    'https://images.unsplash.com/photo-1701284901211-f3a2fea71d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI3NzYxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: 'Entrepreneur',
  author2Name: 'Michael Johnson',
  author2Src:
    'https://images.unsplash.com/photo-1508112304775-4f32d35ccdba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI3NzYxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'Software Engineer',
  author3Src:
    'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzI3NzYxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    "Justin's coaching has been a game-changer for me. I now feel more aligned with my passions and have the confidence to pursue a career path that truly resonates with me.",
  review3:
    "I am grateful for Justin's holistic approach to coaching. His guidance has not only helped me achieve my weight loss goals but has also improved my overall well-being and mindset.",
  author2Alt: 'Image of Michael Johnson',
  review1:
    'Working with Justin has been transformative. His guidance and support have helped me navigate challenges in both my personal and professional life. I feel more confident and empowered to pursue my goals.',
  author1Name: 'Samantha Smith',
  content1:
    'Read what our clients have to say about their experience with Delo Plenty by Justin Bragg.',
  author3Position: 'Wellness Coach',
  author1Position: 'Marketing Executive',
  author3Name: 'Emily Davis',
  author3Alt: 'Image of Emily Davis',
}

Testimonial.propTypes = {
  review2: PropTypes.string,
  author4Alt: PropTypes.string,
  author4Name: PropTypes.string,
  heading1: PropTypes.string,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author2Position: PropTypes.string,
  author2Name: PropTypes.string,
  author2Src: PropTypes.string,
  author4Position: PropTypes.string,
  author3Src: PropTypes.string,
  review4: PropTypes.string,
  review3: PropTypes.string,
  author2Alt: PropTypes.string,
  review1: PropTypes.string,
  author1Name: PropTypes.string,
  content1: PropTypes.string,
  author3Position: PropTypes.string,
  author1Position: PropTypes.string,
  author3Name: PropTypes.string,
  author3Alt: PropTypes.string,
}

export default Testimonial
