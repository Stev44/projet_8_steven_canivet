import './wrapper.scss'
import Card from '../card/card'
import data from '../../datas/data'

function Wrapper() {
  return (
    <section className="wrapper">
      <div className="wrapper_card">
        {data.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              title={data.title}
              cover={data.cover}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Wrapper
