import "./About.css";
import stats from "../../data/stats";
function About() {
  return (
    <section className="why" id="about">
      <div className="heading">
        
        <h2>Why Choose Me</h2>
        <p>
          I specialize in building scalable, responsive and high-performance web
          applications using React, Laravel, WordPress and modern web
          technologies.
        </p>
      </div>
      <div className="cards">
        {stats.map((stat) => (
          <div key={stat.id} className="card">
            <div className="icon-box">{stat.icon}</div>
            <h2>{stat.number}</h2>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
