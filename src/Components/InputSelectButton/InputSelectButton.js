import React from 'react';
import Input from '../Input/Input.js';
import Select from '../Select/Select.js';
import Button from '../Button/Button.js';
import './InputSelectButton.css';
class InputSelectButton  extends React.Component{
    render(){
      const currentName=this.props.currentName;
      let inputMes=[];
      let selectMes=[];
      if (currentName=='用户管理') {
        inputMes=[
           {label:'用户名称',id:'user-name'},
           {label:'用户电话',id:'phone'}
        ];
        selectMes=[
          {label:'用户状态',id:'user-status',option:['全部','正常','停用']},
          {label:'人员类型',id:'peo-type',option:['全部','发货开箱','送货','收货开箱','个人']},
          {label:'所属机构',id:'mec-name',option:['全部','浙一医院','华东医药','个人']},
          {label:'操作权限',id:'privileges',option:['全部','浙一医院','华东医药','个人']}
        ];
      } else if(currentName=='操作用户管理'){
        inputMes=[
           {label:'人员编号',id:'admin-id'},
           {label:'操作人员',id:'name'},
           {label:'联系电话',id:'phone'}
        ];
        selectMes=[
          {label:'用户状态',id:'user-status',option:['全部','正常','停用']},
          {label:'人员类型',id:'peo-type',option:['全部','发货开箱','送货','收货开箱','个人']},
          {label:'所属机构',id:'mec-name',option:['全部','浙一医院','华东医药','个人']},
          {label:'操作权限',id:'privileges',option:['全部','浙一医院','华东医药','个人']}
        ];
      }else if(currentName=='冷链箱管理'){
        inputMes=[
           {label:'设备编号',id:'device-num'},
           {label:'设备类型',id:'device-type'},
           {label:'租赁人',id:'renter'}
        ];
        selectMes=[
          {label:'设备容量',id:'device-capacity',option:['全部','5L','10L','25L','45L']},
          {label:'是否借出',id:'lend',option:['全部','未借出','已借出']},
          {label:'设备状态',id:'device-status',option:['全部','正常','异常','停用','维修']}
        ];
      }else if(currentName=='智能锁管理'){
        inputMes=[
           {label:'设备编号',id:'lock-id'},
           {label:'设备类型',id:'lock-type'},
           {label:'箱体编号',id:'box-id'}
        ];
        selectMes=[
          {label:'设备状态',id:'lock-status',option:['全部','正常','异常','停用']}
        ];
      }else if(currentName=='药品维护'){
        inputMes=[
           {label:'药品名称',id:'drug-name'},
           {label:'化学名称',id:'chemical-name'},
           {label:'药品产地',id:'drug-origin'}
        ];
        selectMes=[
          {label:'启用状态',id:'drug-status',option:['全部','启用','停用']}
        ];
      }else if(currentName=='机构维护'){
        inputMes=[
           {label:'机构编号',id:'agency-id'},
           {label:'机构名称',id:'agency-name'}
        ];
        selectMes=[
          {label:'机构状态',id:'agency-status',option:['全部','正常','停用']},
          {label:'机构类型',id:'agency-type',option:['全部','医院','代理商']},
        ];
      }
      else{

      }
       return (
         <div>
           <div className='inputSelectFlex'>
             {
               inputMes.map((value,index)=>{
                 return  <Input inputLabel={value.label} inputId={value.id} key={value.id.toString()}/>
                })
             }
             {
               selectMes.map((value,index)=>{
                 return <Select selectLabel={value.label} selectId={value.id} option={value.option} key={value.id.toString()}/>
               })
             }
           </div>
           <div>
              <Button/>
           </div>
           <hr className='inputSelectHr'/>
         </div>
       )
    }
}
export default InputSelectButton
