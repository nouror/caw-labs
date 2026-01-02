import { useState, useEffect } from 'react';
import Card from './Card';
import { db } from './firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';
import styles from "./css/Projects.module.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [tag, setTag] = useState("All");

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(collection(db, "projects"));
      const array = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setProjects(array);
    };
    getProjects();
  }, []);

  const filteredProjects = tag === "All" ? projects : projects.filter(p => p.tags.includes(tag));

  return (
    <div className={styles.projects}>
      <nav>
                    <h2 className={styles.title}>My Best Projects</h2>
                    <div>
        <button onClick={() => setTag("All")}>All</button>
        <button onClick={() => setTag("React")}>React</button>
        <button onClick={() => setTag("Vite")}>Vite</button>
        <button onClick={() => setTag("Jest")}>Jest</button>
        <button onClick={() => setTag("JSX")}>JSX</button>
        <button onClick={() => setTag("CSS")}>CSS</button>
        <button onClick={() => setTag("Node.js")}>Node.js</button>

      </div>
      </nav>

      <div className={styles.scrolling}>
        {filteredProjects.map(p => (
          <Card key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
