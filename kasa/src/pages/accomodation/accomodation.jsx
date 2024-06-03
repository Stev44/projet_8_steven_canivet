import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../datas/data'
import Collapse from '../../components/collapse/collapse'
import './accomodation.scss'
import SlideShow from '../../components/slideshow/slideshow'

function Accomodation() {
  const { id } = useParams()
  const [description, setDescription] = useState('')
  const [equipments, setEquipments] = useState([])
  const [slide, setSlide] = useState([])

  useEffect(() => {
    const accomodation = data.find((content) => content.id === id)
    if (accomodation) {
      setDescription(accomodation.description)
      setEquipments(accomodation.equipments)
      setSlide(accomodation.pictures)
    }
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
