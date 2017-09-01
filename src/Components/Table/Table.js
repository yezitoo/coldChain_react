import React from 'react';
import './Table.css';

class Table extends React.Component{
  debugger
    render(){
       const currentName=this.props.currentName;
       let columns=[],columnsFields=[];
       if (currentName=='用户管理') {
          columns=['序号','用户ID','用户名称','用户电话','用户类型','所属机构','用户地址','操作权限','用户状态','操作'];
          columnsFields=['index','userid','username','phone','pe','mecinfo[mecname]','address','pr','us','编辑'];

       } else if(currentName=='操作用户管理'){
          columns=['序号','人员编号','操作人员','联系电话','所属机构','用户类型','用户状态','操作'];
          columnsFields=['index','adminid','name','phone','mecname','utype','usta','编辑'];
       }else if(currentName=="冷链箱管理"){
         columns=['序号','设备编号','设备类型','设备容量','租赁人','所属用户','是否借出','设备状态','备注说明','操作'];
         columnsFields=['index','boxno','boxmodel','capacity','username','mecname','ifl','sta','remarks','编辑'];
       }
      //  const mock = [{userid:1,username:'xxxx',phone:1111,pe:'xxx',mecinfo:{mecname:'xxx'},address:'xxx',pr:'xxxx',us:'xfff'}]
       return(
          <div>
          <table>
             <thead>
                <tr>
                   {
                     columns.map((value)=>
                        <th key={value.toString()}>{value}</th>
                     )
                   }
                </tr>
             </thead>
             <tbody>
                {
                  this.props.data.map((value,index)=>{
                      return(
                         <tr key={value.userid.toString()}>
                           {columnsFields&&columnsFields.map((item,i)=>{
                              if(item=='index'){
                                 return <td>{index+1}</td>
                               }else if(item=='编辑'){
                                 return <td><a href=''>编辑</a></td>
                               }else if(item.indexOf('[')>=0){
                                 var prefix=item.substr(0,item.indexOf('['));
                                 var itemsbefore=value[prefix];
                                 var suffix = item.substr(item.indexOf('[')+1,item.indexOf(']')-item.indexOf('[')-1);
                                 var itemsall=itemsbefore[suffix];
                                 return <td>{itemsall}</td>
                               }else{
                                 return <td>{value[item]}</td>
                               }
                           })}
                         </tr>
                      )}
                   )
                }
             </tbody>
          </table>
          </div>
       )
    }
}
 export default Table
