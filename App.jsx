import { BrowserRouter } from "react-router-dom"
import { router } from "./router/index"
import Header from "./components/base/header"
import Footer from "./components/base/footer"

function App() {
    return(
      <BrowserRouter>
        <Header/>
          {router()}
        <Footer/>
      </BrowserRouter>
    )
}

export default App
