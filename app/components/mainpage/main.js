/**
 * Created by bong on 2016/12/11.
 */
/*
var greeter = require('./t1.js');
document.getElementById('root').appendChild(greeter());
*/


import React, {Component} from 'react';
import {render} from 'react-dom';
import style from './main.css';
import tt from './tt.scss'

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            show:"dsds"
        }
    }

    render() {
        return(
            <div className={style.xxc}>
                <p onMouseOver={this._handleMouseOver.bind(this)} className="tt" >啦啦啦啦啦,哈哈哈哈.6666 {this.state.show}</p>
            </div>
        )
    }
    _handleMouseOver() {
        this.setState({
            show:"xxxxx"
        })
    }
}
export default Main

