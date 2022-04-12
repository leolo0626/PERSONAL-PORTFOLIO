import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import TagCloud from 'TagCloud';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const container = '.tagcloud';
  const texts = [
      'Java', 'Git',
      'React.js', 'Node.js', 'Scala',
      'Python', 'VBA', 'MongoDB',
      'MySQL', 'R',
  ];
  const options = {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
  };
  useEffect(()=>{
    TagCloud(container, texts, options);
  }, [])
  
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I am thirst for knowledge of financial mathematics , investment, and knowledge.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
        <div>

        </div>
          <span className="tagcloud"></span>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
