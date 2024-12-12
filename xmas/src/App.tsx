import { useState } from 'react'
import Header from './components/Header';
// import { FaReact } from 'react-icons/fa';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header 
        title="My Application"
        subtitle="Welcome to our app"
        // icon={<FaReact size={32} color="#61DAFB" />}
      />
      {/* Rest of your app content */}
    </div>
  )
}

export default App
