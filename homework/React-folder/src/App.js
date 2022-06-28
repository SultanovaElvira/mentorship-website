import "./sass/main.scss";
import Faq from "./Faq";

const App = () => {
  return (
    <div className="App">
      <section id="heading" className="heading">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#heading">
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#open-close-search"
            >
              FAQ
            </a>
          </li>{" "}
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#video-block"
            >
              Video
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#media">
              Social media
            </a>
          </li>
        </ul>

        <h1 className="program-name">Mentorship program</h1>
        <h4>6 January - 30 June 2023| Online</h4>
        <p className="heading-paragraph">
          Riga TechGirls mentorship program “TechMentor” gathers professionals
          in the field of IT and tech with the goal of providing support to
          women developing their talents, taking their first steps in the IT
          field or advancing their career further in this field.
        </p>
      </section>
      {/* добавить расстояние между вопросами */}

      <main>
        <section className="buttons">
          <h2 className="sr-only">Button to learn more about program</h2>
          {/* <a href="" rel="noopener noreferrer" className="learn-btn"  >  */}
          <button className="button learn-btn">
            {" "}
            <a href="#main-part"></a> LEARN MORE
          </button>

          <section id="open-close-search" className="open-close-search">
            <h2 className="sr-only">Button to open-close questions</h2>
            <button className="button open-close">OPEN/CLOSE QUESTIONS</button>
            <h3 className="sr-only">
              To search by keywords and button to clear search place
            </h3>
            <form name="search" method="post">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search a question"
              ></input>

              <button className="button clear">Clear</button>
            </form>
          </section>
        </section>
        <Faq /> {/* faq part going from app.js file   */}
      </main>
      <footer>
        <section id="video-block" className="video-block">
          <section className="video">
            <h2 className="video-sentence">
              Watch "How coding taught me resilience"
            </h2>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QBaqxzThFFM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>

          <section id="media" className="media">
            <h3>Social media</h3>
            <a
              href="http://www.facebook.com/RigaTechGirls"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="http://www.instagram.com/rigatechgirls/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              {" "}
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="http://twitter.com/rigatechgirls"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              {" "}
              <i className="fab fa-twitter-square"></i>
            </a>
            <a
              href="http://www.youtube.com/channel/UCRLScISANNlZzlRGApth9Yg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </section>
        </section>

        <section className="quote">
          <h2 className="sr-only">Blockquote from CEO of Youtube</h2>
          <blockquote>
            "Though we do need more women to graduate with technical degrees, I
            always like to remind women that you don't need to have science of
            technology degrees to build a career in tech"
          </blockquote>

          <cite>Susan Wojcicki, CEO of YouTube</cite>
        </section>
      </footer>
      <section className="made-by">
        Made with <span className="heart">&#10084;</span> by{" "}
        <span>
          <a
            href="http://github.com/SultanovaElvira/"
            target="_blank"
            rel="noopener noreferrer"
            className="creator-name"
          >
            Elvira Sultanova
          </a>{" "}
        </span>{" "}
      </section>
    </div>
  );
};

export default App;
