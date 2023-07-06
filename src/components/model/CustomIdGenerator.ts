import PatternID from "./PatternID";


export class CustomIdGenerator<PatternID>{
    protected pattern:PatternID;

    constructor(pattern:PatternID) {
        this.pattern=pattern;
    }



}