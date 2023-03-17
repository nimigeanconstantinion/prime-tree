import TreeNode from "primereact/treenode";
import {CafeneaSauLocalitate} from "./CafeneaSauLocalitate";
export default interface NodN extends TreeNode{

    data?:CafeneaSauLocalitate|null;
    children?:NodN[]

}