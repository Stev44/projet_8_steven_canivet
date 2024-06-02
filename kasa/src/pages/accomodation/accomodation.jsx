import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Accomodation() {
  const { id } = useParams() // Récupère l'ID de l'URL
  const [description, setDescription] = useState('')
  const [equipments, setEquipments] = useState([])

  useEffect(() => {
    // Fonction pour récupérer les données JSON (cela pourrait être une requête API dans une vraie application)
    const fetchData = async () => {
      const response = await fetch('/path/to/data.json')
      const data = await response.json()

      // Trouver l'hébergement correspondant à l'ID
      const accomodation = data.find((item) => item.id === id)
      if (accomodation) {
        setDescription(accomodation.description)
        setEquipments(accomodation.equipments)
      } else {
        setDescription('Aucune description trouvée.')
        setEquipments([])
      }
    }

    fetchData()
  }, [id])

  return (
    <div>
      <h1>Description de l'Hébergement</h1>
      <p>{description}</p>
      <h2>Équipements</h2>
      <ul>
        {equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    </div>
  )
}

export default Accomodation
