import React, { Component } from 'react'
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
                    <div>
                        <img style={{ float: "right", marginTop: "-20px", width: "26px", height: "26px" }} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u895.svg?token=1c89ae911c1cdf84a532c852a2abebbb5ae737231dd5b998cf5adac5ae7d7f03" alt="" />
                    </div>
                </div>
                <div style={{ height: "120px" }}>
                    <div style={{ float: "left" }}>
                        <img style={{ width: "80px", height: "80px", borderRadius: "50%", margin: "20px 30px" }} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u889.svg?token=be3dd495ffa42ef69edc40dc0da06d03703f5be513ccc8665a2c4e14023a08d9" alt="" />
                        <p style={{ marginTop: "-70px", marginLeft: "120px" }}>调用QQ、微信昵称</p>
                    </div>
                </div>
                <div>
                <div style={{borderBottom:"2px solid #ccc",height:"40px"}}>
                        <span style={{fontSize:"20px",marginLeft:"40px"}}>设置</span>
                        <span style={{fontSize:"18px",fontWeight: "600",color:"#a9a9a9",marginLeft:"240px"}}>></span>
                </div>
                <div style={{borderBottom:"2px solid #ccc",height:"40px"}}>
                        <span style={{fontSize:"20px",marginLeft:"40px"}}>反馈</span>
                        <span style={{fontSize:"18px",fontWeight: "600",color:"#a9a9a9",marginLeft:"240px"}}>></span>
                </div>
                <div style={{borderBottom:"2px solid #ccc",height:"40px"}}>
                        <span style={{fontSize:"20px",marginLeft:"40px"}}>帮助</span>
                        <span style={{fontSize:"18px",fontWeight: "600",color:"#a9a9a9",marginLeft:"240px"}}>></span>
                </div>
                <div style={{borderBottom:"2px solid #ccc",height:"40px"}}>
                        <span style={{fontSize:"20px",marginLeft:"40px"}}>关于</span>
                        <span style={{fontSize:"18px",fontWeight: "600",color:"#a9a9a9",marginLeft:"240px"}}>></span>
                </div>
                <div style={{borderBottom:"2px solid #ccc",height:"40px"}}>
                        <span style={{fontSize:"20px",marginLeft:"40px"}}>分享</span>
                        <span style={{fontSize:"18px",fontWeight: "600",color:"#a9a9a9",marginLeft:"240px"}}>></span>
                </div>
                </div>
            </div>
        )
    }
}
