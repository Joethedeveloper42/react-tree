import React from 'react';

const ChildNode = ({ number, children, newChildLevelNode }) => {
  let flag = children.length > 0 ? true : false;
  return (
    <div>
      <p onClick={() => newChildLevelNode(number)}>V [{number}]</p>
      <ul style={{ listStyle:"none"}}>
        {flag ? children.map( child => <li key={child.number}>> [{child.number}]</li>) : ''}
      </ul>
      <p style={{ paddingLeft: '25px', marginTop: '-10px'}} onClick={() => newChildLevelNode(number)}>+</p>
    </div>
  );
}

export default ChildNode;