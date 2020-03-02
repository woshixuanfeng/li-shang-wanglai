import React, { Component } from 'react'
import './wode.css'
import {NavLink} from 'react-router-dom'
export default class about extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div id="about">
                <div>
                    <div style={{ textAlign: "center", marginTop: "24px", fontSize: "20px" }}>
                        <p>我的</p>
                    </div>
                </div>
                <div style={{ height: "120px" }}>
                    <div style={{ float: "left" }}>
                        <p style={{ marginTop: "20px", marginLeft: "120px" }}>调用QQ、微信昵称</p>
                    </div>
                </div>
                <NavLink to="/shezhi">
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=4e77da7d4f51db07c47f79cb5ad8fcb1979399ae51a0122ba2e1ed19ec5e09ec"/>
					</div>
					<div id="gengd-span">设置</div>
					<div id="gengd-img2">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
					</div>
				</div>
			</NavLink>
            </div>
        )
    }
}
