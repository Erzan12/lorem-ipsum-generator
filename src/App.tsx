import { useState } from "react";
import { generateLorem } from "./utils/generateLorem";
import ParagraphInput from "./components/ParagraphInput";

function App() {
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  function handleGenerate(count: number) {
    setParagraphs(generateLorem(count));
  }

  return (
    <main>
      <h1>Lorem Ipsum Generator</h1>

      <ParagraphInput onGenerate={handleGenerate} />

      <section aria-live="polite">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </main>
  );
}

export default App;