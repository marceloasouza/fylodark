import './App.css';
import Header from './Components/Header/Header';
import Form from './session/Form/Form';
import Intro from './session/Intro/Intro';
import Productive from './session/Productive/Productive';
import Products from './session/Products/Products';
import Testimonials from './session/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Products />
      <Productive />
      <Testimonials />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
