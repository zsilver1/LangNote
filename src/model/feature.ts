import { v4 } from "uuid";
import { Tooltip } from "../tooltip";

export class Feature {
    public readonly name: string;
    public content: string;
    public children: Feature[];
    private readonly _id: string;

    constructor(name: string) {
        this.name = name;
        this._id = v4();
    }
}

export class FeatureTooltip implements Tooltip {
    public readonly abbrev: string;
    public readonly featureId: string;
    public description: string;
    public toString(): string {
        return "${abbrev}\n${description}";
    }
}
