import Header from "./components/Header.tsx";
import IntroSection from "./components/IntroSection.tsx";
import InfoSection from "./components/InfoSection.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="w-full bg-background">
        <Header />
        <IntroSection />
      </div>

      <div>
        <InfoSection />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
