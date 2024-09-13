
const About: React.FC = () => {

  return (
    <>

      <section className="about-info-heading">
        <p><strong>Founded in 2024</strong> from the fellowship between designers and architects,
          Tagus Portus seeks to enrich the urban landscape of the south bay of the Tagus river.
          Our goal is to create modern, elegant and confortable homes to all our clientes.
          <br />
          <br />
          <strong> Our main objective is and will always be to turn your dream home into a reality.</strong>
        </p>
      </section>

      <section className="about-container">
        <h2>Meet our Team</h2>
        <section className="about-info-row">
          <div className="about-info-row-id">
            <img
              src='/icons/b-man1.png'
              alt="Image of the founder">
            </img>
            <h3>Anthony C</h3>
          </div>
          <p>
            Founder of the company, with a Masters Degree in architecture and a passion for interior design.
            <br />
            Sought to found the company as a means to modernize the urban landscape of the southern bay of the Tagus River, while also seeking to
            bring susteinable housing to its inhabitants.
          </p>
        </section>

        <section className="about-info-row">
          <div className="about-info-row-id">
            <img
              src='/icons/bs-woman1.png'
              alt="Image of the cofounder">
            </img>
            <h3>Catherine C</h3>
          </div>
          <p>
            Co-founder of the company and an enthusiast for anything related to design and art.
            Catherine serves as the second pillar of the company, who is constantly seeking to maintain a strong degree of quality to all of our works.
          </p>
        </section>

        <section className="about-info-row">
          <div className="about-info-row-id">
            <img
              src='/icons/bs-man2.png'
              alt="Image of an employee">
            </img>
            <h3>Tiago A</h3>
          </div>
          <p>
            Our customer contact manager. He is the first bridge between our clients and us.
            <br />
            Tiago seeks to ensure that the client´s vision is being properly passed down to our designers.
          </p>
        </section>

        <section className="about-info-row">
          <div className="about-info-row-id">
            <img
              src='/icons/bs-woman2.png'
              alt="Image of an employee">
            </img>
            <h3>Inês P</h3>
          </div>
          <p>
            One of our talented designers, who is responsible for bringing to life the ideas and dreams of our clients,
            with the highest degree of fidelity possible.
          </p>
        </section>

      </section>
    </>
  )
}

export default About