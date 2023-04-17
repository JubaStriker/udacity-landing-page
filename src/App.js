import Notify from './components/Notify/Notify';
import Reviews from './components/Reviews/Reviews';
import Sponsors from './components/Sponsors/Sponsors';
import TestNav from './components/TestNav/TestNav';
import TopBanner from './components/TopBanner/TopBanner';
import logo from "../src/assets/images-removebg-preview.png"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div data-theme="light">

      <button className="fixed bottom-5 right-16 z-50 rounded-full bg-gradient-to-br from-violet-600 to-violet-200 text-white px-2 animate-bounce py-2 shadow-lg md:block">
        <img src={logo} alt="" className='h-10 w-10' />
      </button>

      <TestNav />
      <TopBanner />
      <Reviews />
      <Sponsors />
      <Notify />
      <Footer />

    </div>
  );
}

export default App;
