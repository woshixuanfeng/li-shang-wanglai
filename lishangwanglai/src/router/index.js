import React,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Header from '../component/Header/header'
import shouye from '../component/shouye/shouye'
import lizhang from '../component/lizhang/lizhang'
import lishi from '../component/lishi/lishi'
import wode from '../component/wode/wode'
import Index from './index.css'
import shezhi from '../component/wode/shezhi/shezhi'
import fankui from '../component/wode/fankui/fankui'
import bangzhu from '../component/wode/bangzhu/bangzhu'
import guanyu from '../component/wode/guanyu/guanyu'
import fenxiang from '../component/wode/fenxiang/fenxiang'
function router() { 
    return(
        <div id="box">
            <Header></Header>
           
            <Switch>
                <Route exact path='/' component={shouye}/>
                <Route path='/lishi' component={lishi}/>
                <Route path='/lizhang' component={lizhang}/>
                <Route path='/wode' component={wode}/>
                <Route path='/shezhi' component={shezhi}/>
                <Route path='/fankui' component={fankui}/>
                <Route path='/bangzhu' component={bangzhu}/>
                <Route path='/guanyu' component={guanyu}/>
                <Route path='/fenxiang' component={fenxiang}/>
                <Route component={Header}/>
            </Switch>
        </div>
    )
 }

  export default router