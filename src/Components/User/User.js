import React from 'react';
import './User.css';


class User extends React.Component{
    constructor(props){
       super(props);
       this.state={
         isLogin:false,
         isShow:false,
         isDate:new Date()
      }
    }
    handleClick(){
       this.setState(prevstate=>{
          return {isLogin:!prevstate.isLogin}
       })
       return false;
    }
    menuClick(){
       this.setState(prevstate=>({isShow:!prevstate.isShow}))
    }
    tick(){
       this.setState({isDate:new Date()})
    }
    render(){
      let listItems =[
          {id:"login" , tet:'登录', http:'',cla:"iconfont icon-denglu"},
          {id:"lout" , tet:'退出', http:'',cla:"iconfont icon-tuichu"}
      ];
      const lists= this.state.isLogin?listItems[1]:listItems[0];
       return (
         <div className={this.props.name}>
             <div onClick={this.menuClick.bind(this)}>
               <span>你好，{this.state.userName}</span>
               <a href="" className="mail"><i className="iconfont icon-youxiang"></i></a>
               <span>设置</span>
               <i className="iconfont icon-shezhi"></i>
             </div>
             <p><span>当前时间：</span><span>{this.state.isDate.toLocaleString()}</span></p>
             <ul className={"menu_list"+" "+(this.state.isShow?"menu_list_b":"menu_list_n")}>
               <li key={lists.id}>
                  <a href={lists.http} onClick={this.handleClick.bind(this)}><i className={lists.cla}></i><span>{lists.tet}</span></a>
               </li>
             </ul>
         </div>
       )
    }
    componentDidMount(){
      const t = this;
      var name = '请登录';
      if (name =="请登录") {
          this.setState({
            isLogin:false,
            userName:name
          })
      } else {
          this.setState({
            isLogin:true,
            userName:name
          })
      }
      setInterval(
         ()=>t.tick(),
         1000
      )
    }
}
export default User
