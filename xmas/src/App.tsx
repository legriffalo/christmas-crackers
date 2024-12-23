import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Icon from './images/cracker.png';
import Body from './components/Body.tsx';
// import SearchBox from './components/SearchBox.tsx';


// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';



function App() {
  console.log('Icon path:', Icon); // Add this line to debug

  return (
    <div style = {styles.root}>
      <Header 
        title="Christmas Crackers"
        subtitle="Cheap one-liners and jokes ad-nauseam"
        icon={Icon}
      />
    <Body/>
    <Footer />

  </div>
  )
}

const styles = {
  root: {
    height:'100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    gap:'1vh',
    padding: '1rem',
    backgroundColor: 'black',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
}


export default App;