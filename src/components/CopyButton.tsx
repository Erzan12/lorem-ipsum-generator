import { useState } from "react";

type CopyButtonProps = {
  paragraphs: string[];
};

export default function CopyButton({
  paragraphs,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  async function handleCopy() {
    if (paragraphs.length === 0) return;

    try {
      const text = paragraphs.join("\n\n");
      await navigator.clipboard.writeText(text);

      setCopied(true);
      setError("");

      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setError("Unable to copy. Please try again.");
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleCopy}
        disabled={paragraphs.length === 0}
      >
        {copied ? "Copied!" : "Copy All"}
      </button>

      {error && <p role="alert">{error}</p>}
    </div>
  );
}