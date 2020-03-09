import React, { Component } from 'react'
import './lishi.css'
export default class Manage extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div id="director">
            <div>
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>
                        <a style={{ display: 'inline-block', border: '2px solid blue', borderRaduis: '2px' }}>待参加 已参加</a>
                    </p>
                </div>
                <div style={{height:"30px"}}>
                    <p style={{float:"left",margin:"20px 40px"}}>类别</p>
                    <p style={{float:"left",margin:"20px 40px"}}>时间</p>
                </div>
                <div style={{height:"60px"}}>
                    <div style={{float:"left",margin:"10px 35px"}}>
                        <p>王大锤搬家请客称</p>
                        <p>地点名称地点名称</p>
                    </div>
                    <div style={{float:"right",marginTop:"8px",fontSize:"20px",color:"red"}}>
                       <p>待参加</p>
                    </div>
                </div>
                <div style={{height:"60px"}}>
                    <div style={{float:"left",margin:"10px 35px"}}>
                        <p>王大锤搬家请客称</p>
                        <p>地点名称地点名称</p>
                    </div>
                    <div style={{float:"right",marginTop:"8px",fontSize:"20px",color:"red"}}>
                       <p>待参加</p>
                    </div>
                </div>
        </div>
           
        )
    }
}
