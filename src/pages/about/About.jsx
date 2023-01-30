import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
      At BodyWorthy, we are passionate about promoting a healthy and active lifestyle. Our team of experienced trainers and state-of-the-art facilities are dedicated to helping you achieve your fitness goals.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
            Our fitness website was founded by a group of fitness enthusiasts who saw a need for accessible and effective fitness solutions.
            </p>
            <p>
            Driven by their passion for health and wellness, they set out to create a platform where anyone, anywhere, can achieve their fitness goals. With a focus on education, motivation, and community, our website offers a comprehensive suite of tools and resources to help our users lead healthier and happier lives.
            </p>
            <p>
            Join us on this journey to fitness and become a part of our growing community!
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
            Our vision is to empower individuals to lead healthier and more fulfilling lives through fitness and wellness. 
            </p>
            <p>
            We believe that fitness should be accessible and achievable for everyone, regardless of their fitness level or experience.
            </p>
            
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
            Our mission is to empower and inspire people to lead a healthy and active lifestyle. We believe that fitness should be accessible and achievable for everyone, regardless of their current level of fitness or experience.
            </p>
          
            <p>
            Join us on our journey to better health and wellness.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About