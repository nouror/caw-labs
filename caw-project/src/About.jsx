import styles from "./css/About.module.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiReact,
  SiVite,
  SiJest,
  SiGithub,
  SiFigma,
  SiDjango,
  SiFirebase 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutme}>
            <div className={styles.title}>
            <h1>NOUR EL IMENE BOUMEZBEUR</h1>
            <h4>Junior React Developer | Computer Science Master’s Student</h4>
            </div>
            <h3>
              I design and develop modern, intuitive and user-focused web experiences.

            </h3>
            <p>
              Driven by a strong interest in web development and digital design, I enjoy combining clean code with thoughtful visuals to create websites that are both functional and aesthetically pleasing. I work comfortably across the different stages of a project, from idea to implementation.
            </p>
            <h3> 
              With a background in computer science, I focus on building responsive and well structured applications while paying close attention to user experience and clarity. I value simplicity, consistency and purpose in every interface I create.
            </h3>
            <p> 
              From a basic concept to a complete web solution, I aim to transform ideas into meaningful digital products. My versatility allows me to adapt to different projects and continuously improve my skills through hands-on experience and learning.

            </p>
            <br/>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              Discover my journey (LinkedIn)
            </a>
            </div>
      <div className={styles.myskills}>
      <div className={styles.catg}>
        <h2>Languages</h2>
        <ul>
          <li><SiHtml5 /> HTML</li>
          <li><SiCss3 /> CSS</li>
          <li><SiJavascript /> JavaScript</li>
          <li><SiPython /> Python</li>
          <li><FaJava  /> Java</li>
        </ul>
      </div>

      <div className={styles.catg}>
        <h2>Frameworks / Libraries</h2>
        <ul>
          <li><SiReact /> React</li>
          <li><SiVite /> Vite</li>
          <li><SiJest /> Jest</li>
          <li><SiDjango /> Django</li>
        </ul>
      </div>

      <div className={styles.catg}>
        <h2>Tools</h2>
        <ul>
          <li><SiGithub /> GitHub</li>
          <li><SiFigma /> Figma</li>
          <li><SiFirebase /> Firebase</li>
        </ul>
      </div>

      </div>
    </div>
    );
}

export default About;
