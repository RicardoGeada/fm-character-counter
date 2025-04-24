function getWordCount(text: string): number {
    return text.trim().split(/\s+/).filter(Boolean).length;
};

export default getWordCount;