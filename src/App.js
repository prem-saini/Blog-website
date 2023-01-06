
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Post from './component/Post';
import Section from './component/Section';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <div className='main'>
        <Sidebar />
        <Post />

      </div>
      <Footer />
    </div>
  );
}

export default App;
