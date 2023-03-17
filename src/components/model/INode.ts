import TreeNode from "primereact/treenode";


export default interface INode<T> extends TreeNode{
    data?:T|null,
    children:INode<Object>[]
}