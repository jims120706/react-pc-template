import React from 'react'
import { connect } from "react-redux";

class Page1 extends React.Component {
  render() {
    console.log('页面一', this.props)
    const { addc1, minusc1, addc2, minusc2, count1, count2, user1, user2 } = this.props
    return (
      <div>
        <div>页面1 {count1} {count2} {user1} {user2}</div>
        <button onClick={addc1}>add 1</button>
        <button onClick={minusc1}>minus 1</button>
        <button onClick={addc2}>add 2</button>
        <button onClick={minusc2}>minus 2</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state state state', state)
  return {
    count1: state.countReducer.count1,
    count2: state.countReducer.count2,
    user1: state.userReducer.count1,
    user2: state.userReducer.count2,
  };
};

const mapDispatchToProps = {
  addc1: () => {
    return ({ type: "ADD_C1", module: 'count' });
  },
  minusc1: () => {
    return ({ type: "MINUS_C1", module: 'count' });
  },
  addc2: () => {
    return ({ type: "ADD_C2", module: 'user' });
  },
  minusc2: () => {
    return ({ type: "MINUS_C2", module: 'user' });
  }
};
export default connect(
  mapStateToProps, //状态映射 mapStateToProps
  mapDispatchToProps, //派发事件映射
)(Page1);