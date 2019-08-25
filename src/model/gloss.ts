export class InterlinearGloss {
    public readonly inputText: string;
    public readonly freeTranslation: string;
    public morphemeGloss: GlossItem[];
    public translatedGloss: GlossItem[];
}

/*
Gloss item representing a single word, which may
contain many morphemes.
 */
class GlossItem {
    public morphemes: GlossMorpheme[];
    // characters used to separate morphemes, e.g. "-", ".", "="
    public morphemeSeparators: string[];
}

/*
Gloss item representing a single morpheme.
 */
class GlossMorpheme {
    public readonly morpheme: string;
    public readonly isWord: boolean;
    // word or feature id depending on above, if null then morpheme will not contain link
    public readonly associatedId: string;
    /*
    False if morpheme is empty, in which case it represens a grammatical feature only.
    E.g. 1PL, NOM
     */
    public readonly isMorpheme: boolean;
    // public tooltip: 
}