import { BrowserRouter } from "react-router-dom"
import { router } from "./router/index"
import Header from "./components/base/header"
import Footer from "./components/base/footer"
import 'animate.css';

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
