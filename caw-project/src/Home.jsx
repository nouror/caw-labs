import { useState } from "react";
import styles from "./css/Home.module.css";

function Home() {
  const [start, setStart] = useState(false);
  const [next, setNext] = useState(false);
  const [no, setNo] = useState(false);
  
  const handleWelcome = () => setStart(true);
  const handleNext = () => setNext(true);
  const handleNo = () => setNo(true);

  return (
    <div className={styles.home}>

        {(!start) ? <>
                      <h2>{'<h1>'}<span>Hi there!</span>{'</h1>'}</h2>
                      <h2>{'<p>'}<span>Looking for someone to turn<br/> your idea into a website?</span>{'</p>'}</h2>
                      <button onClick={handleWelcome}>Let's Begin Your Journey</button>

                    </>
                : !next ? 
                          <div className={styles.hi}>
                            <div>
                              <img src="me.jpg" alt="Profile Picture" />
                              <h4>{'<'}Junior React Developer{'>'}</h4>
                            </div>
                            <div>
                              <h1>{'<h4>'}<span>I am Boumezbeur Nour El Imene</span> {'</h4>'}</h1>
                              <p>Your vision My Code. I develop websites that not only look great but perform flawlessly across all devices.                              </p>
                              <button onClick={handleNext}>What's Next?</button>
                            </div>
                          </div>

                        : !no ? <div>
                                  <h2>{'<h2>'}<span>Ready to Turn your Idea into a Website?</span>{'</h2>'}</h2>
                                  <div>
                                      <button  onClick={() => window.location.hash = "#contact"}>Yes, Let's Connect</button>
                                      <button onClick={handleNo}>See Projects First</button>
                                  </div>
                                </div>
                                
                              : <div>
                                  <h2>{'<h2>'}<span>Check Out My Projects</span>{'</h2>'}</h2> 
                                  <button onClick={() => window.location.hash = "#projects"}>Explore Projects</button>
                                </div>
      }

      
    </div>
  );
}

export default Home;
