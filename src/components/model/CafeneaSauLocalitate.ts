import Comparable from "./Comparable";

export interface CafeneaSauLocalitate{
    id: number;
    idParinte?: number | null;
    denumire: string;
    fel: string; // Aici voi avea "C" de la cafenea sau "L" de la localitate
    adancime?: number | null;
}
