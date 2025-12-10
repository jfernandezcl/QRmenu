import Header from "./components/Header.tsx";
import IntroSection from "./components/IntroSection.tsx";
import InfoSection from "./components/InfoSection.tsx";

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
    </>
  );
}

export default App;
