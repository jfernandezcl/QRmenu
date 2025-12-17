import DigitalLetterForm from "../components/DigitalLetterForm";
import HeaderLetter from "../components/HeaderLetter";

export default function DigitalLetter() {
  return (
    <div className="bg-background">
      <div>
        <HeaderLetter />
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <DigitalLetterForm />
      </div>
    </div>
  );
}
