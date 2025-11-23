import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Container } from './components/Container';
import { Section } from './components/Section';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />
      <Section>
        <Container>
          <Services />
        </Container>
      </Section>
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

