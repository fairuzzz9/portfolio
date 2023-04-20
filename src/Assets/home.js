import "./CSS/home.css";
import frontImage from './Images/front-image.jpg';

function Home() {
  return (
    <>
      <div className="homepage-container v-header">
        <div className="background-image">
          <img src={frontImage} alt='asd'/>
        </div>
        <div className="background-overlay"></div>
        <div className="background-content">
          <h1>Hi, Im Fairuz.</h1>
          <p>I'm a Front-end Software Engineer, currently working at Pos Malaysia. The frameworks that I've been working on is Angular and React.</p>
          <a href="as" className="btn">Read more</a>
        </div>
      </div>
    </>
  );
}

export default Home;
