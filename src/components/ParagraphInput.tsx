import { useState, type FormEvent } from "react";

type ParagraphInputProps = {
  onGenerate: (count: number) => void;
};

export default function ParagraphInput({
  onGenerate,
}: ParagraphInputProps) {
  const [count, setCount] = useState("3");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedCount = count.trim();
    const paragraphCount = Number(trimmedCount);

    if (
      trimmedCount === "" ||
      !Number.isInteger(paragraphCount) ||
      paragraphCount < 1 ||
      paragraphCount > 100
    ) {
      setError("Enter a whole number between 1 and 100.");
      return;
    }

    setError("");
    onGenerate(paragraphCount);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="paragraph-count">
        Number of paragraphs
      </label>

      <div className="form-row">
        <input
          className="number-input"
          id="paragraph-count"
          name="paragraphCount"
          type="number"
          min={1}
          max={100}
          step={1}
          required
          value={count}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? "paragraph-count-error" : "paragraph-count-help"
          }
          onChange={(event) => {
            setCount(event.target.value);
            setError("");
          }}
        />

        <button className="btn btn-primary" type="submit">
          Generate
        </button>
      </div>

      {error ? (
        <p className="error-text" id="paragraph-count-error" role="alert">
          {error}
        </p>
      ) : (
        <p className="helper-text" id="paragraph-count-help">
          Choose between 1 and 100 paragraphs.
        </p>
      )}
    </form>
  );
}