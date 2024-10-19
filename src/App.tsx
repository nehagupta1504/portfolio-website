import NavBar from "./components/header/header.component"
import HomePage from "./components/home-page/homePage.component"

function App() {
  return (
    <>
     <div className="flex w-full min-h-svh">
      <NavBar />
      <HomePage />
     </div>
    </>
  )
}

export default App
