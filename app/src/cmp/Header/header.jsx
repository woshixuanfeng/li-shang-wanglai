import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'
export default class Home extends Component{
constructor(){
    super()
}
render(){
    return(
        <div id="header">
			<div id="content">
				<router-view></router-view>
			</div>
            <div id="u1">
				<li><NavLink to="/">首页</NavLink></li>
				<li><NavLink to="/lizhang">礼账</NavLink></li>
				<li><NavLink to="/lishi">礼事</NavLink></li>
				<li><NavLink to="/wode">我的</NavLink></li>
			</div>
        </div>
    )
}
}
