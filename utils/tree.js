const same = (arr1, arr2) => arr1.filter((item, index) => arr2[index] === item);
class TreeNode {
  val;
  left;
  right;

  constructor({ val, children = [] }) {
    const [left = null, right = null] = children;
    this.val = val;
    this.left =  !left ? left : new TreeNode(left);
    this.right = !right ? right : new TreeNode(right);
  }

  find(val) {
    if (!this) {
      return this;
    }
  
    if (val < this.val && this.left) {
      return this.left.find(val);
    }
  
    if (val > this.val && this.right) {
      return this.right.find(val);
    }

    if (val !== this.val) {
      return null;
    }

    return this.val;
  }

  findValPath(val, paths = []) {
    if (!this) {
      return [];
    }

    if (val === this.val) {
      return paths;
    }

    if (this.left) {
      const path = this.left.findValPath(val, paths.concat(0));
      if (path) {
        return path;
      }
    }
    
    if (this.right) {
      const path = this.right.findValPath(val, paths.concat(1));
      if (path) {
        return path;
      }
    }
  }

  findByPath(paths) {
    return paths.reduce((treeNode, path) => {
      return path === 0 ? treeNode.left: treeNode.right;
    }, this);
  }

  isValidBST(min, max) {
    if (!this) {
      return true;
    }
  
    if (min && this.val <= min || max && this.val >= max) {
      return false;
    }
  
    return this.left ? this.left.isValidBST(min, this.val) : true 
      && this.right ?  this.right.isValidBST(this.val, max) : true;
  }

  // 查找两部分重合部分
  findParent(node1, node2) {
    const path1 = this.findValPath(node1);
    const path2 = this.findValPath(node2);
    const paths = same(path1, path2);
    return this.findByPath(paths);
  }

  // order: 0 前序遍历 1 中序遍历 2 后序遍历
  map(callback = () => {}, order = 0) {
    if (this) {
      if (order === 0) callback(this);
      if (this.left) this.left.map(callback)
      if (order === 1) callback(this);
      if (this.right) this.right.map(callback)
      if (order === 2) callback(this);
    }
  }

  // 遍历树节点，如果一个值在节点左侧，一个在右侧，则这个节点就是公共的父节点
  static findParent(treeNode, node1, node2) {
    if (treeNode === null || node1 === treeNode.val || node2 === treeNode.val) return treeNode;
  
    const left = TreeNode.findParent(treeNode.left, node1, node2);
    const right = TreeNode.findParent(treeNode.right, node1, node2);
  
    if (!left) {
      return right;
    }
  
    if (!right) {
      return left;
    }
  
    return treeNode;
  }
}



module.exports = TreeNode;
