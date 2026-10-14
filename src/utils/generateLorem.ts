const loremSentences = [
    "Lorem ipsum sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
];

export function generateLorem(paragraphCount: number): string[] {
    const paragraphs: string[] = [];

    for (let i = 0; i < paragraphCount; i++) {
        const sentenceCount = 3 + Math.floor(Math.random() * 3);
        const sentences: string[] = [];

        for (let j = 0; j < sentenceCount; j++) {
            const randomIndex = Math.floor(
                Math.random() * loremSentences.length
            );

            sentences.push(loremSentences[randomIndex]);
        }

        paragraphs.push(sentences.join(" "));
    }

    return paragraphs;
    
}