export function getCharactersCount(text: string, excludeSpaces: boolean): number {
    return excludeSpaces ? text.replace(/\s+/g, "").length : text.length; 
}

export function getWordCount(text: string): number {
    return text.trim().split(/\s+/).filter(Boolean).length;
};

export function getSentenceCount(text: string): number {
    return text.match(/[^.!?]+[.!?]+/g)?.length || 0;
}

