import React, { Component } from "react";

class Welcome extends Component {
  state = {
    message: "به حساب كاربري خوش آمديد لطفاً وارد حساب خود بشويد"
  };

  login = () => {
    this.setState({ message: "از ورود شما متشكريم" });
  };

  render() {
    return (
      <div>
        {/* Salam Salim */}
        {this.props.user} &nbsp;
        {this.state.message}
        <br />
        <button onClick={this.login}> ورود</button>
        {/* {this.props.children} */}
      </div>
    );
  }
}
export default Welcome;
