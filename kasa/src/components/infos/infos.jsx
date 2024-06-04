import './infos.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Infos({ title, name, picture, rating, location, tags }) {
  return (
    <div className="infos">
      <div className="infos_location">
        <div className="infos_location_title">
          <h2>{title}</h2>
          <p>{location}</p>
        </div>
        <div className="infos_location_tags">
          {tags.map((tag, index) => {
            return (
              <span className="infos_location_tags_span" key={index}>
                {tag}
              </span>
            )
          })}
        </div>
      </div>
      <div className="infos_host">
        <div className="infos_host_profile">
          <div className="infos_host_profile_name">
            <span>{name[0]}</span>
            <span>{name[1]}</span>
          </div>
          <img src={picture} alt={name} />
        </div>
        <div className="infos_host_rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
    </div>
  )
}

export default Infos
