import React,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Header from '../cmp/Header/header'
import shouye from '../cmp/shouye/shouye'
import lizhang from '../cmp/lizhang/lizhang'
import lishi from '../cmp/lishi/lishi'
import wode from '../cmp/wode/wode'
import Index from './index.css'
import shezhi from '../cmp/wode/shezhi/shezhi'
import fankui from '../cmp/wode/fankui/fankui'
import bangzhu from '../cmp/wode/bangzhu/bangzhu'
import guanyu from '../cmp/wode/guanyu/guanyu'
import fenxiang from '../cmp/wode/fenxiang/fenxiang'
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