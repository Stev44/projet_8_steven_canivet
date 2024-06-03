import Banner from '../../components/banner/banner'
import Collapse from '../../components/collapse/collapse'
import aboutData from '../../datas/about'
import './about.scss'

function About() {
  return (
    <body>
      <Banner />
      <main>
        {aboutData.map((data) => {
          return (
            <div key={data.id} className="about_collapse">
              <Collapse title={data.title} content={data.content} />
            </div>
          )
        })}
      </main>
    </body>
  )
}

export default About
