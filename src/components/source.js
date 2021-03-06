import React from 'react';
import { WithStore } from 'pure-react-carousel';
import '../css/porfolio.css';


const titles =
[
  {
    title: "Project TCA",
    lang:
    <span><i className="devicon-java-plain"></i>
      <i className="devicon-mysql-plain"></i>
      <i className="devicon-javascript-plain"></i>
    </span>,
    sUrl:
    <a href="https://www.pqtca.com">
      <i className="devicon-devicon-plain"></i>
    </a>,
    desc: " Full Stack Java Application using custom CSS, JS, Jquery, Spring MVC, Spring Boot.Site was built for a client in approximately 4 days. Utilizes JPA, Hibernate, Simple Mailer and is hosted on Digital Ocean."
  },
  {
        title: "Adlister (Craigslist Clone)",
        lang:
        <span>
          <i className="devicon-amazonwebservices-original"></i>
          <i className="devicon-java-plain"></i>
          <i className="devicon-mysql-plain"></i>
          <i className="devicon-bootstrap-plain"></i>
        </span>,
        sUrl:
        <a href="http://tbclister-env.smz2mnhxpg.us-east-1.elasticbeanstalk.com/ads">
          <i className="devicon-devicon-plain"></i>
        </a>,
        desc: " Full stack MVC project providing persistance through a Relational dB. The site is hosted on AWS's ElasticBeanstalk and data is stored on AWS's RDS using MySQL 5.6. The server is being run using AWS's EC2 service running Tomcat on Linux. To add a layer of fun to the project, design was completed using only Bootstrap 4 classes."
      },
      {
        title: "Weather App",
        lang: <span>
          <i className="devicon-javascript-plain"></i>
      <i className="devicon-webpack-plain colored"></i>
    </span>,
    sUrl:
      <a href="https://github.com/Kelleyc718/codeup-web-exercises/tree/master/deploy/weatherMap">
        <i className="devicon-github-plain-wordmark"></i>
      </a>,
      desc: "Weather App utilizing Open Weather API, Google Maps API, IP API. Uses users originating IP address to populate initial weather. Also plays with Material IO's design tools."
  },
  {
    title: "Contacts Manager",
    lang: <i className="devicon-java-plain-wordmark"></i>,
    sUrl:
      <a href="https://github.com/emma-chris/contactsManager">
        <i className="devicon-github-plain-wordmark"></i>
      </a>,
    desc: " Simple phone contact demo using Java 9."
  },
  {
    title: "Github File List Utility",
    lang:
      <i className="devicon-javascript-plain"></i>,
    sUrl:
      <a href="https://github.com/Kelleyc718/GHFileLister">
        <i className="devicon-github-plain-wordmark"></i>
      </a>,
      desc: " A utility made for fun. Uses Github's v3 REST API to access a users public repo and list the files. Recursively checks folder contents as well."
  }
]

class Source extends React.Component {

  handleChange() {
    let slide = this.props.currentSlide;
    return (slide === 0) ? titles[0] : (slide === 1) ? titles[1] : (slide === 2) ? titles[2] : titles[3]
  }

  render() {
    return (
      <div className="portfolio-title">
        <h1>Portfolio</h1>
        <h6>Click the Github Icon to check out the source code.</h6>
        <p>
          {this.handleChange().title}:
        </p>
        <p>
          {this.handleChange().desc}
        </p>
          {this.handleChange().lang}
          {this.handleChange().sUrl}
      </div>
    )}
}

export default WithStore(Source, state => ({
  currentSlide: state.currentSlide
}));
