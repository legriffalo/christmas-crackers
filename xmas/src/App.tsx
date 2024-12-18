import Header from './components/Header';
import Footer from './components/Footer.tsx';
import Icon from './images/cracker.png';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';



function App() {
  console.log('Icon path:', Icon); // Add this line to debug

  return (
    <div>
    <div>
      <Header 
        title="Christmas Crackers"
        subtitle="Cheap oneliners and jokes ad-nauseam"
        icon={Icon}
      />
    </div>

    <Footer />

  </div>
  )
}

export default App;