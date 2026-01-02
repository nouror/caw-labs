import { useState } from "react";
import styles from "./css/Card.module.css";

function Card(props) {
  const {
    title,
    description,
    github,
    demo,
    tags,
    image   
  } = props.project;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.card}>
      {image && (
        <img
          src={image}
          alt={title}
        />
      )}
       
      <div className={styles.main}>
        <h3>{title}</h3>

        <div className={styles.tags}>
          {tags?.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        {(!isOpen) ?
        <button onClick={() => setIsOpen(!isOpen)} >
          Open
        </button>

        :
          <div className={styles.more}>
                    <p>{description}</p>

            <div>
            <a href={github} target="_blank" rel="noreferrer">GitHub</a><br />
            <a href={demo} target="_blank" rel="noreferrer">Live Demo</a>
            </div>
            <button onClick={() => setIsOpen(!isOpen)}>
              Close
            </button>
          </div>
        }

      </div>  
    </div>
  );
}

export default Card;
