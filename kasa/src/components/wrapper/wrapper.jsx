import './wrapper.scss'
import Card from '../card/card'
import data from '../../datas/data'

function Wrapper() {
  return (
    <main className="wrapper">
      <section className="wrapper_card">
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
      </section>
    </main>
  )
}

export default Wrapper
