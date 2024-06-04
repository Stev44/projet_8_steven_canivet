import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './slideshow.scss'
import { useState } from 'react'

function SlideShow({ slide }) {
  const [update, setUpdate] = useState(0)

  const nextSlide = () => {
    setUpdate(update + 1)
    if (update === slide.length - 1) setUpdate(0)
  }

  const prevSlide = () => {
    setUpdate(update - 1)
    if (update === 0) setUpdate(slide.length - 1)
  }
  return (
    <div style={{ backgroundImage: `url(${slide[update]})` }} className="slide">
      <div className="slide_arrow slide_arrow_left" onClick={prevSlide}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div className="slide_arrow slide_arrow_right" onClick={nextSlide}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="slide_counter">
        <p>
          {update + 1}/{slide.length}
        </p>
      </div>
    </div>
  )
}

export default SlideShow
