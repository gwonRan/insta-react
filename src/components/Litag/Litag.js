import React, {Component} from "react";

class Litag extends Component{
    render(){
        return(
            <li className="feedList">
                <div className="feedCommentOther_column">
                  <span className="font-bold">pringco</span>
                  <span className="inputVal">{this.props.text}</span>
                </div>
                <div className="feedCommentOther_icon">
                  <button className="heartButton ">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
            </li>
        );
    }
}

export default Litag;