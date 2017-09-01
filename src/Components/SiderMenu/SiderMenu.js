import React from 'react';
import $ from 'jquery';
import './SiderMenu.css';

class SiderMenu extends React.Component{
   constructor(props){
      super(props);
      this.state={
         isBlock:false,
         isIndex:-1
      }
   }
   handleClick(){
      this.setState(prevstate=>({isBlock:!prevstate.isBlock}));
   }
   liClick(index,name){
      const t=this;
      if (name=="用户管理") {
          $.ajax({
             type: "POST",
             url: "http://192.168.1.14:8080/zhll-ssm/fenyeUser",
             data: {
                 // "username": $("#user-name").val(),
                 // "phone": $("#phone").val(),
                 // "userstatus": $("#user-status").val(),
                 // "peotype": $("#peo-type").val(),
                 // "meccoding": $("#mec-name").val(),
                 // "privileges": $("#privileges").val(),
                 "page": 1,
                 "size": 10
             },
             success:function(msg){
                 t.props.ajaxMsg(name,msg.userlist);
             },
             error:function(msg){
               t.props.ajaxMsg(name,msg.userlist);
             }
         })
      }else if(name=="操作用户管理"){
          $.ajax({
            type:"POST",
            url:"http://192.168.1.14:8080/zhll-ssm/admindata",
            data:{
              "number": 1,
              "pagesize": 10
            },
            success:function(msg){
               t.props.ajaxMsg(name,msg.Admlist);
            },
            error:function(msg){
              t.props.ajaxMsg(name,msg.Admlist);
            }
          })
      }else if(name=="冷链箱管理"){
          $.ajax({
            url: "http://192.168.1.14:8080/zhll-ssm/fenyeBox",
            type: "POST",
            data: {
                // "boxno": $("#device-num").val(),
                // "boxmodel": $("#device-type").val(),
                // "capacity": $("#device-capacity").val(),
                // "username": $("#renter").val(),
                // "iflend": $("#lend").val(),
                // "state": $("#device-status").val(),
                "page":1,
                "size":10
            },
            success: function(msg) {
               t.props.ajaxMsg(name,msg.boxlist);
            },
            error:function(msg){
               t.props.ajaxMsg(name,msg.boxlist);
            }
         })
      }else if(name=="智能锁管理"){
        $.ajax({
            url: "http://192.168.1.14:8080/zhll-ssm/LnteLockdata",
            type: "POST",
            data: {
                // "lockno": $("#lock-id").val(),
                // "lockmodel": $("#lock-type").val(),
                // "boxno": $("#box-id").val(),
                // "lockstate": $("#lock-status").val(),
                "number": 1,
                "pagesize": 10
            },
            success:function(msg){
               t.props.ajaxMsg(name,msg.Locklist);
            },
            error:function(msg){
               t.props.ajaxMsg(name,msg.Locklist);
            }
          })
      }else if(name=="药品维护"){
        $.ajax({
            url: "http://192.168.1.14:8080/zhll-ssm/fenyeDrug",
            type: "POST",
            data: {
                // "drugname": $("#drug-name").val(),
                // "chemname": $("#chemical-name").val(),
                // "producer": $("#drug-origin").val(),
                // "enablestate": $("#drug-status").val(),
                "page": 1,
                "size": 10
            },
            success:function(msg){
              t.props.ajaxMsg(name,msg.druglist);
            },
            error:function(msg){
              t.props.ajaxMsg(name,msg.druglist);
            }
        })
      }else if(name=="机构维护"){
        $.ajax({
            url: "http://192.168.1.14:8080/zhll-ssm/fenyeMec",
            type: "POST",
            data: {
                // "meccoding": $("#agency-id").val(),
                // "mecname": $("#agency-name").val(),
                // "mecstatus": $("#agency-status").val(),
                // "mectype": $("#agency-type").val(),
                "page": 1,
                "size": 10
            },
            success:function(msg){
              t.props.ajaxMsg(name,msg.meclist);
            },
            error:function(msg){
              t.props.ajaxMsg(name,msg.meclist);
            }
        })
      }
      else{}


      this.props.promote(this.props.menuBox);
      this.setState({isIndex:index});
   }
   render(){
      const bstyle={display:this.state.isBlock?"block":"none"};
      return (
         <div>
           <p className="menuTitle" onClick={this.handleClick.bind(this)}>{this.props.menuBox}</p>
           <ul className="menuList" style={bstyle}>
              {
                this.props.menuName.map((name,index)=>{
                   return <li key={name.toString()} onClick={this.liClick.bind(this,index,name)}
                              style={{backgroundColor:this.state.isIndex==index && this.props.active=="active"?"#ddd":"#ffffff"}}>
                             {name}
                        </li>
                })
              }
           </ul>
         </div>
      )
   }
}
export default SiderMenu
