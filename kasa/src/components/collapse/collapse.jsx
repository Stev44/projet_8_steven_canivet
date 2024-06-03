import './collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="collapse">
      <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
        {title}
        <FontAwesomeIcon
          icon={faAngleUp}
          className={toggle ? 'icon icon_down' : 'icon icon_up'}
        />
      </h3>
      <ul
        className={toggle ? 'content content_active' : 'content content_hidden'}
      >
        {Array.isArray(content)
          ? content.map((equipment, index) => {
              return <p key={index}>{equipment}</p>
            })
          : content}
      </ul>
    </div>
  )
}

export default Collapse
