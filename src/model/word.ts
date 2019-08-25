import { v4 } from "uuid";

/*
A class representing a part of speech or word class.
Optionally contains properties (e.g. gender), inflections, and specific
inflections that are displayed directly on a word's page.
E.g. For verbs, the feminine perfective conjugation should always appear.
 */
export class PartOfSpeech {
    public readonly name: string;
    public properties: PartOfSpeechProperty[];
    public inflectionsToDisplay: Inflection[];
    public inflections: Inflection[];

    constructor(name: string) {
        this.name = name;
    }
}

class PartOfSpeechProperty {
    public readonly name: string;
    // example options for gender: "masculine", "feminine"
    public readonly options: string[];
    public readonly inflect: boolean;
    public readonly checkbox: boolean;
    public readonly associatedFeatureId: string;
}

export class Word {
    public readonly word: string;
    // mostly used for searching
    public readonly pos: string;
    // map of property -> value, e.g. "gender" -> "masculine"
    public properties: object;
    public inflections: InflectedWord[];
    // used to search by English word
    public keywords: string[];
    // list of interlinear gloss id's
    public phraseIds: string[];
    public definition: string;
    // list of interlinear gloss id's
    public usageIds: string[];
    public attachments: Blob[];

    private readonly _id: string;

    constructor(word: string, pos: string) {
        this.word = word;
        this.pos = pos;
        this._id = v4();
    }

}

class InflectedWord {
    // set of features that this inflection applies for
    public readonly features: string[];
    public readonly value: string;
}

export class Inflection {
    public static applyTransform(input: string): InflectedWord {
        let output = input;
        return output;
    }

    // set of features that this inflection applies for
    public readonly features: string[];

    // list of transformation rules for this inflection
    private transformations: Array<[RegExp, string]>;
}