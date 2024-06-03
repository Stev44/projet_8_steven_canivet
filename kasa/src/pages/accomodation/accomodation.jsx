import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../datas/data'
import Collapse from '../../components/collapse/collapse'
import './accomodation.scss'

function Accomodation() {
  const { id } = useParams()
  const [description, setDescription] = useState('')
  const [equipments, setEquipments] = useState([])

  useEffect(() => {
    const accomodation = data.find((content) => content.id === id)
    setDescription(accomodation.description)
    setEquipments(accomodation.equipments)
  }, [id])

  return (
    <div className="accomodation_collapse">
      <div className="accomodation_content">
        <Collapse title={'Description'} content={description}></Collapse>
      </div>
      <div className="accomodation_content">
        <Collapse title={'Équipements'} content={equipments}></Collapse>
      </div>
    </div>
  )
}

export default Accomodation
