import arrowLeft from '../../assets/arrow_left.png'
import arrowRight from '../../assets/arrow_right.png'
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
      <div className="slide_arrow_left" onClick={prevSlide}>
        <img src={arrowLeft} alt="flèche gauche" />
      </div>
      <div className="slide_arrow_right" onClick={nextSlide}>
        <img src={arrowRight} alt="flèche droite" />
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
