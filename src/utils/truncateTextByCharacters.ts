export const truncateTextByCharacters = (text: string, maxCharacters: number): string => {
    if (text?.length <= maxCharacters) {
        // Si le texte contient moins de caractères que la limite, retournez-le tel quel.
        return text;
    } else {
        // Sinon, tronquez le texte au nombre maximal de caractères et ajoutez "..." à la fin.
        const truncatedText = text.slice(0, maxCharacters);

        return truncatedText + "...";
    }
};
