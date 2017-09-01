import React from 'react';
import './App.css';
import Img from '../Img/Img.js';
import Text from '../Text/Text.js';
import User from '../User/User.js';
import SiderMenu from '../SiderMenu/SiderMenu.js';
import Table from '../Table/Table.js';
import InputSelectButton from '../InputSelectButton/InputSelectButton.js';

class App extends React.Component{
   constructor(props){
      super(props);
      this.state={
         isLocal:"首页",
         isActive:['disable','disable','disable'],
         currentName:"首页", //当前菜单
         listData:[] //列表数据
      }
   }
   handlePromote(a){
      if (a=='人员管理') {
         this.setState({isActive:['active','disable','disable']});
      } else if(a=='设备管理'){
         this.setState({isActive:['disable','active','disable']});
      }else{
         this.setState({isActive:['disable','disable','active']});
      }
   }
   handleMsg(name,datas){
      this.setState({
         currentName:name,
         listData:datas
      });
   }
   render(){
   //边侧sider导航栏数据
   const menu1=['用户管理','操作用户管理','权限管理'];
   const menu2=['冷链箱管理','智能锁管理','租赁管理'];
   const menu3=['药品维护','机构维护','基础数据','数据导出'];
   const menuBox=['人员管理','设备管理','数据维护'];
      return (
        <div>
           <div className="header">
              <Img name="header_left"/>
              <Text til={
                    {
                       "name":"header_middle",
                       "tet":"你好啊，这只是个测试哦"
                    }
              }/>
              <User name="header_right"/>
           </div>
           <div className="article">
              <div className="location"><span>欢迎使用冷链监控平台</span><span>当前位置：</span><span>{this.state.isLocal}</span></div>
              <div className="sider">
                 <p><span className="home">首页</span><i className="iconfont icon-shouye"></i></p>
                 <SiderMenu menuName={menu1} menuBox={menuBox[0]} active={this.state.isActive[0]} promote={this.handlePromote.bind(this)} ajaxMsg={this.handleMsg.bind(this)}/>
                 <SiderMenu menuName={menu2} menuBox={menuBox[1]} active={this.state.isActive[1]} promote={this.handlePromote.bind(this)} ajaxMsg={this.handleMsg.bind(this)}/>
                 <SiderMenu menuName={menu3} menuBox={menuBox[2]} active={this.state.isActive[2]} promote={this.handlePromote.bind(this)} ajaxMsg={this.handleMsg.bind(this)}/>
              </div>
              <div className="section">
                 <InputSelectButton currentName={this.state.currentName}/>

              </div>
           </div>
        </div>
      )
   }
}

export default App;
