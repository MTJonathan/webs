import "./assets/CSS/App.css"
import Header from "./components/header"
import Principal from "./components/principal"
import Services from "./components/services"
import Nosotros from "./components/nosotros"
const App = () => {
  return (
    <main>
      <Header/>
      <Principal/>
      <Services/>
      <Nosotros/>
    </main>
  )
}

export default App
