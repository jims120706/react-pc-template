import React from 'react'
import { connect } from "react-redux";

class Page1 extends React.Component {
  render() {
    return (
      <div>
        <div>页面1</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state state state', state)
  return {
  };
};

const mapDispatchToProps = {
};
export default connect(
  mapStateToProps, //状态映射 mapStateToProps
  mapDispatchToProps, //派发事件映射
)(Page1);