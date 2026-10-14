import { useState, type FormEvent } from "react";

type ParagraphInputProps = {
    onGenerate: (count: number) => void;
}

export default function ParagraphInput({
    onGenerate,
}: ParagraphInputProps) {
    const [count, setCount] = useState("3");
    const [error, setError] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const paragraphCount = Number(count);

        if (
            count.trim() === "" ||
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
            <label htmlFor="paragraph-count">
                Number of paragraphs
            </label>

            <input 
                type="number" 
                id="paragraph-count" 
                min="1" 
                max="100" 
                step="1" 
                value={count} 
                onChange={(event) => setCount(event.target.value)}
            />

            {error && <p role="alert">{error}</p>}

            <button type="submit">Generate</button>
        </form>
    )
}