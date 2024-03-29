import { BrowserRouter } from "react-router-dom"
import { router } from "./router/index"
import Header from "./components/base/header/header"
import Footer from "./components/base/footer/footer"

function App() {
    return(
      <BrowserRouter>
        <div className="layout row">
          <Header/>
            {router()}
          <Footer/>
        </div>
      </BrowserRouter>
    )
}

export default App
