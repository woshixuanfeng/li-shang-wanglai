import React, { Component } from 'react'
import './lishi.css'
export default class Manage extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div id="Manage">
                <div>
                    {/* <img style={{ margin: '30px 20px' }} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=259381e1720889d4b1dafed9a00e735b661259df5ff7f0ba766934fe963c8a34" alt="" /> */}
                    <p style={{ textAlign: 'center', marginTop: '-58px' }}>
                        <a style={{ display: 'inline-block', border: '2px solid blue', borderRaduis: '2px' }}>收礼 送礼</a>
                    </p>
                    {/* <img style={{ float: 'right', marginTop: "-20px", width: "22px", height: "22px" }} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u90.svg?token=56fe59dbe371b1f9d38c8ce3231d8249085ef78b9aa2d949260e7bd4ff4b522c" alt="" /> */}
                </div>
                <div style={{height:"30px"}}>
                    <p style={{float:"left",margin:"20px 40px"}}>类别</p>
                    <p style={{float:"left",margin:"20px 40px"}}>时间</p>
                    <p style={{float:"left",margin:"20px 40px"}}>金额</p>
                </div>
                <div style={{height:"60px"}}>
                    <div style={{margin: "20px 40px"}}>
                        <p>类目名称</p>
                    </div>
                    <div style={{float:"right",marginTop:"-40px",fontSize:"20px",color:"red"}}>
                       <p>15000.00</p>
                    </div>
                </div>
                <div style={{height:"60px"}}>
                    <div style={{margin: "20px 40px"}}>
                        <p>类目名称</p>
                    </div>
                    <div style={{float:"right",marginTop:"-40px",fontSize:"20px",color:"red"}}>
                       <p>15000.00</p>
                    </div>
                </div>
                <div style={{height:"60px"}}>
                    <div style={{margin: "20px 40px"}}>
                        <p>类目名称</p>
                    </div>
                    <div style={{float:"right",marginTop:"-40px",fontSize:"20px",color:"red"}}>
                       <p>15000.00</p>
                    </div>
                </div>
                <div style={{height:"60px"}}>
                    <div style={{margin: "20px 40px"}}>
                        <p>类目名称</p>
                    </div>
                    <div style={{float:"right",marginTop:"-40px",fontSize:"20px",color:"red"}}>
                       <p>15000.00</p>
                    </div>
                </div>
            </div>


        )
    }
}
