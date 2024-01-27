import './App.css'
import Destructuring from './components/Destructuring'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import DonatePage from './pages/DonatePage'
import Navbar from './components/Navbar'
import ProjectsPage from './pages/ProjectPage'
import projectJSON from './projects-data.json'
import ProjectDetails from './pages/ProjectDetails'

function App() {


  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/projects' element={<ProjectsPage projects={projectJSON}></ProjectsPage>}></Route>
        <Route path='/support' element={<DonatePage></DonatePage>}></Route>
        <Route path='/projects/:something' element={<ProjectDetails projects={projectJSON}></ProjectDetails>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  )
  
}

export default App


/* 

Routing steps:


1. npm install react-router-dom

2. wrap our entire application around the BrowserRouter from react-router-dom

2. import the {Routes,Route} in app.jsx and create the routes for each component to render

*/




/* 
Exercise 1: 

1. Create a component DonatePage.jsx in your pages folder with the following jsx:

        <div>
            <h2>Support Us</h2>
            <p>Your support helps us continue our work.</p>
            <button>Donate Now</button>
        </div>

2. create a route for this component when you go to /support

3. Add the Link in the Navbar.jsx to go to the Donate Page


*/