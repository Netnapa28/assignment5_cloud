import { useState } from 'react'
import './App.css'
import jenkinsLogo from './assets/jenkins.png' // ตรวจสอบว่าไฟล์อยู่ที่ path นี้

function App() {
  const [score, setScore] = useState(0)

  const handleLogoClick = () => {
    setScore(score + 1)
  }

  return (
    <div className="container">
      <h1>Welcome to Jenkins CI/CD Demo</h1>
      <p className="score">SCORE: <span>{score}</span></p>
      <p className="author">BY<br />B6511005 NETNAPA SARAWAN</p>

      <div className="logo-container">
        <img
          src={jenkinsLogo}
          alt="Jenkins logo"
          className="jenkins-logo"
          onClick={handleLogoClick}
        />
      </div>

      <p className="description">
        Click on the Jenkins logo to increase your score and learn more about Jenkins CI/CD
      </p>

      <footer>
        Powered by <span className="highlight">Jenkins</span> and <span className="highlight">Vite</span>
      </footer>
    </div>
  )
}

export default App
