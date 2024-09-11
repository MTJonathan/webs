import "./assets/CSS/App.css"
import Header from "./components/header"
import Principal from "./components/principal"
import Services from "./components/services"
import Nosotros from "./components/nosotros"
import Details from "./components/details"
import Contacto from "./components/contacto"
import Footer from "./components/footer"
const App = () => {
  return (
    <main>
      <Header/>
      <Principal/>
      <Services/>
      <Nosotros/>
      <Details/>
      <Contacto/>
      <Footer/>
    </main>
  )
}

export default App
