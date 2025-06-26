
import './HeroSection.css';
import heroImg from '../assets/hero.png';
const HeroSection = () => {
  return (
    <section className="hero-section bg-black text-white d-flex align-items-center" id="home">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Left Side */}
        <div className="left text-start">
          <div className="badge bg-info text-white fw-bold rounded-pill px-4 py-2 mb-3">Hello!</div>
          <h1 className="display-4 fw-bold">
            I’m <span className="text-highlight">Anish 👋</span>
          </h1>
          <p className="lead text-white">UI/UX Designer, Front-End Developer & Thinker. <br /> Based in India.</p>

          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-warning px-4 py-2 fw-medium rounded">
              Download CV
            </button>

            <button className="btn btn-outline-light px-4 py-2 fw-medium rounded">
              Get In Touch
            </button>

          </div>
        </div>

        {/* Right Side */}
        <div className="right position-relative mt-5 mt-md-0">
          <div className="yellow-blob"></div>
          <img
            src={heroImg}
            alt="Anish"
            className="profile-img img-fluid position-relative"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
