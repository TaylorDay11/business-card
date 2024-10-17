import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"
import Footer from "./components/Footer.js"

function App(){
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))