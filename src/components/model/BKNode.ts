

interface cField{
    id: string|null,
    customKey: string,
    value: string,
    type: string,
    parentRid:string
}

export default interface BKNode{
    id: string|null,
    label: string,
    descriere: string,
    cfields: cField[],
    subordinates: BKNode[],
    parinte?:BKNode|null,
}