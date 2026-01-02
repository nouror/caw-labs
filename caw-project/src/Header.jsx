import styles from "./css/Header.module.css";

function Header() {
    
  return (
<div className={styles.header}>
            <h1>B.Nour</h1>
              
            <nav>
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>

        
            
        
    </div>
  )

}
export default Header
