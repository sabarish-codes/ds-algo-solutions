import { TreeNode } from './tree-node';

function sumOfLeftLeaves(root: TreeNode | null): number {
    function dfs(root: TreeNode | null, isLeft: boolean): number {
        if(!root) return 0;
        if(!root.left && !root.right) return isLeft ? root.val : 0;
        return dfs(root.left, true) + dfs(root.right, false);
    }
    return dfs(root, false);
};
