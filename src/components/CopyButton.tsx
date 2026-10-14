import { useState } from "react";

type CopyButtonProps = {
  paragraphs: string[];
};

export default function CopyButton({ paragraphs }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(paragraphs.join("\n\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      className="btn btn-secondary"
      type="button"
      onClick={handleCopy}
      disabled={paragraphs.length === 0}
    >
      {copied ? "Copied!" : "Copy text"}
    </button>
  );
}