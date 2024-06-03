import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../datas/data'
import Collapse from '../../components/collapse/collapse'
import './accomodation.scss'
import SlideShow from '../../components/slideshow/slideshow'

function Accomodation() {
  const { id } = useParams()
  const accomodation = data.filter((content) => content.id === id)
  const description = accomodation[0].description
  const equipments = accomodation[0].equipments
  const [slide, setSlide] = useState([])

  useEffect(() => {
    setSlide(accomodation[0].pictures)
  }, [id])

  return (
    <div className="accomodation">
      <div className="accomodation_slide">
        <SlideShow slide={slide} />
      </div>
      <div className="accomodation_collapse">
        <div className="accomodation_content">
          <Collapse title={'Description'} content={description}></Collapse>
        </div>
        <div className="accomodation_content">
          <Collapse title={'Équipements'} content={equipments}></Collapse>
        </div>
      </div>
    </div>
  )
}

export default Accomodation
