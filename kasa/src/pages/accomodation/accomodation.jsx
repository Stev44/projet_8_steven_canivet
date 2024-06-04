import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../datas/data'
import Collapse from '../../components/collapse/collapse'
import './accomodation.scss'
import SlideShow from '../../components/slideshow/slideshow'
import Infos from '../../components/infos/infos'

function Accomodation() {
  const { id } = useParams()
  const [description, setDescription] = useState('')
  const [equipments, setEquipments] = useState([])
  const [slide, setSlide] = useState([])
  const [tags, setTags] = useState([])
  const [location, setLocation] = useState('')
  const [rating, setRating] = useState('')
  const [title, setTitle] = useState('')
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    const accomodation = data.find((content) => content.id === id)
    if (accomodation) {
      setDescription(accomodation.description)
      setEquipments(accomodation.equipments)
      setSlide(accomodation.pictures)
      setTags(accomodation.tags)
      setLocation(accomodation.location)
      setRating(accomodation.rating)
      setPicture(accomodation.host.picture)
      setTitle(accomodation.title)
      setName(accomodation.host.name.split(' '))
    }
  }, [id])

  return (
    <main className="accomodation">
      <section className="accomodation_slide">
        <SlideShow slide={slide} />
      </section>
      <section className="accomodation_infos">
        <Infos
          title={title}
          name={name}
          picture={picture}
          tags={tags}
          location={location}
          rating={rating}
        />
      </section>
      <section className="accomodation_collapse">
        <div className="accomodation_content">
          <Collapse title={'Description'} content={description}></Collapse>
        </div>
        <div className="accomodation_content">
          <Collapse title={'Équipements'} content={equipments}></Collapse>
        </div>
      </section>
    </main>
  )
}

export default Accomodation
