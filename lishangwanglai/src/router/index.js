import React,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Header from '../component/Header/header'
import shouye from '../component/shouye/shouye'
import lizhang from '../component/lizhang/lizhang'
import lishi from '../component/lishi/lishi'
import wode from '../component/wode/wode'
import Index from './index.css'
function router() { 
    return(
        <div id="box">
            <Header></Header>
           
            <Switch>
                <Route exact path='/' component={shouye}/>
                <Route path='/lishi' component={lishi}/>
                <Route path='/lizhang' component={lizhang}/>
                <Route path='/wode' component={wode}/>
                <Route component={Header}/>
            </Switch>
        </div>
    )
 }

  export default router