import { useState } from "react";
import ParagraphInput from "./components/ParagraphInput";
import CopyButton from "./components/CopyButton";
import { generateLorem } from "./utils/generateLorem";
import "./App.css";
import { FileText } from "lucide-react";

function App() {
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  function handleGenerate(count: number) {
    setParagraphs(generateLorem(count));
  }

  return (
    <main className="app">
      <div className="container">
        <header className="site-header">
          <div className="brand-icon" aria-hidden="true">
            L
          </div>

          <div className="brand-content">
            <span className="brand-name">Loremsum</span>
            <span className="brand-tagline">
              A simple placeholder text generator
            </span>
          </div>
        </header>

        <section className="hero">
          <h1>Lorem Ipsum Generator</h1>
          <p>
            Generate clean placeholder text for your designs,
            prototypes, and next big idea.
          </p>
        </section>

        <section className="card" aria-labelledby="generator-title">
          <h2 id="generator-title" className="card-title">
            Configure your text
          </h2>
          <ParagraphInput onGenerate={handleGenerate} />
        </section>

        <section className="card" aria-labelledby="results-title">
          <div className="results-header">
            <div>
              <h2 id="results-title" className="results-title">
                Generated text
              </h2>
              <p className="results-count" aria-live="polite">
                {paragraphs.length}{" "}
                {paragraphs.length === 1 ? "paragraph" : "paragraphs"} generated
              </p>
            </div>

            <CopyButton paragraphs={paragraphs} />
          </div>

          {paragraphs.length > 0 ? (
            <div className="paragraph-list">
              {paragraphs.map((paragraph, index) => (
                <article className="paragraph-item" key={index}>
                  <span className="paragraph-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="paragraph-text">{paragraph}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">
                <FileText size={28} strokeWidth={1.8} />
              </div>
              <strong>Your text will appear here</strong>
              <p>
                Choose the number of paragraphs above and click Generate
                to get started.
              </p>
            </div>
          )}
        </section>

        <footer className="site-footer">
          Made for designers and developers.
        </footer>
      </div>
    </main>
  );
}

export default App;