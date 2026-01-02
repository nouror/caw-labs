import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'
function MainSite() {

  return (
    <div>
      <Header />

      <div id="home">
        <Home />
      </div>

      <div id="projects">
        <Projects />
      </div>
      
      <div id="about">
        <About />
      </div>

     

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  )

}
export default MainSite
