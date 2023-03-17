import NodN from "./NodN";
import { TreeSelect } from 'primereact/treeselect';
import TreeNode from "primereact/treenode";
import {Tree} from "primereact/tree";

export interface TreeN<T> extends Tree{
    data:T,
    children:[]
}