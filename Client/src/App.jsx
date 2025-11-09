import { useState, useEffect } from 'react'
import './App.css'
  
function App() {
  const [message, setMessage] = useState("")

  useEffect( () => { 
   fetch("http://localhost:4000/api/message")
   .then((res) => res.json())
   .then((data) => setMessage(data.message))
   .catch((err => {
     console.error("Error fetching message", err)
    }))
  }, []);

  return (
    <>
        <header>
      <h1>
        {/* <img src="/Profile picture.jpg" alt="Shivam Mukherjee" width="200" height="200" /> */}
        <b>Shivam Mukherjee</b>
      </h1>

      <h1>
        <b>Portfolio</b>
      </h1>
      
      <p>
        <a href="/education.html" target="_main"> Education </a> | <a href="/experience.html" target="_main"> Experience </a> | <a href="/projects.html" target="_main"> Projects </a> | <a href="https://www.linkedin.com/in/shivammukherjee/" target="_main"> LinkedIn </a> | <a href="https://github.com/ShivammMukherjee" target="_main"> GitHub </a>
      </p>
     
    </header>

    <footer>
      <p>
         <a href="/contact.html" target="_main"> Contact </a>
      </p>
    </footer>
      <h2 >{message}</h2>
    </>
  );
}


export default App
