import React, { Component } from 'react';
import ChildNode from './ChildNode';

class Tree extends Component {
  state = { 
    globalCount: 0,
    root: []
   }

   newRootLevelNode = () => {
    let newNode = { 
      number: this.state.globalCount,
      children: []
    }
    this.setState({
      root: [...this.state.root, newNode],
      globalCount: this.state.globalCount+1
    })
    this.displayAllNodes();
   }

   newChildLevelNode = (num) => {
    let found = this.state.root.find( node => node.number === num);
    let newNode = { 
      number: this.state.globalCount,
      children: []
    }
    found.children.push(newNode);
    this.setState({
      globalCount: this.state.globalCount+1
    })
   }

   displayAllNodes = () => {
     if(this.state.root.length >= 1) {
       return this.state.root.map( node => {
         return <ChildNode key={node.number} number={node.number} children={node.children} newChildLevelNode={this.newChildLevelNode} />
       })
     }
   }

  render() {

    return (
      <div>
        {this.displayAllNodes()}
        <p onClick={this.newRootLevelNode}>+</p>
      </div>
    );
  }
}

export default Tree;