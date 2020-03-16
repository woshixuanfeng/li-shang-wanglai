import React,{Component} from 'react'
import './lizhang.css'
export default class director extends Component{
constructor(){
    super()
}
render(){
    return(
        <div id="Manage">
                <div>
                    <p  style={{ textAlign: 'center', marginTop: '20px' }}>
                        <a style={{ display: 'inline-block', border: '2px solid blue', borderRaduis: '2px' }}>收礼 送礼</a>
                    </p>
                </div>
                <div style={{height:"30px"}}>
                    <p style={{float:"left",margin:"20px 40px"}}>类别</p>
                    <p style={{float:"left",margin:"20px 40px"}}>时间</p>
                    <p style={{float:"left",margin:"20px 40px"}}>金额</p>
                </div>
                <div style={{height:"60px"}}>
                    <div style={{margin: "20px 40px"}}>
                        <p>类目名称</p>
                        <p>姓名</p>
                    </div>
                    <div style={{float:"right",marginTop:"-60px",fontSize:"20px",color:"red"}}>
                       <p>15000.00</p>
                    </div>
                    <div style={{float:"right",marginTop:"-40px", fontSize:"16px",color:"gray"}}>
                       <p>10人送礼 2016.5.21</p>
                    </div>
                </div>
                <div style={{height:"60px"}}>
                    <div style={{margin: "20px 40px"}}>
                        <p>类目名称</p>
                        <p>姓名</p>
                    </div>
                    <div style={{float:"right",marginTop:"-60px",fontSize:"20px",color:"red"}}>
                       <p>15000.00</p>
                    </div>
                    <div style={{float:"right",marginTop:"-40px",fontSize:"16px",color:"gray"}}>
                       <p>10人送礼 2016.5.21</p>
                    </div>
                </div>
                <div style={{height:"60px"}}>
                    <div style={{margin: "20px 40px"}}>
                        <p>类目名称</p>
                        <p>姓名</p>
                    </div>
                    <div style={{float:"right",marginTop:"-60px",fontSize:"20px",color:"red"}}>
                       <p>15000.00</p>
                    </div>
                    <div style={{float:"right",marginTop:"-40px",fontSize:"16px",color:"gray"}}>
                       <p>10人送礼 2016.5.21</p>
                    </div>
                </div>
                <div style={{height:"60px"}}>
                    <div style={{margin: "20px 40px"}}>
                        <p>类目名称</p>
                        <p>姓名</p>
                    </div>
                    <div style={{float:"right",marginTop:"-60px",fontSize:"20px",color:"red"}}>
                       <p>15000.00</p>
                    </div>
                    <div style={{float:"right",marginTop:"-40px",fontSize:"16px",color:"gray"}}>
                       <p>10人送礼 2016.5.21</p>
                    </div>
                </div>
            </div>


    )
}
}
