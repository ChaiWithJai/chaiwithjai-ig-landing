import { StoryScroll } from './components/StoryScroll';
import { Navigation } from './components/Navigation';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';

function App() {
  // Simple client-side routing
  const path = window.location.pathname;

  return (
    <>
      <Navigation />
      {path === '/' && <StoryScroll />}
      {path === '/testimonials' && <Testimonials />}
      {path === '/about' && <About />}
    </>
  );
}

export default App;