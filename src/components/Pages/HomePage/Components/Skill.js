import React from "react";
import CustomAcc from './CustomAcc';
import styled from 'styled-components';

function recursiveAccordion(obj){
   let keys = Object.keys(obj)
   if (keys.length == 0){
       return;
   }   
   return (keys.map((key, index)=>
       <CustomAcc key={index} title={key} >
        {recursiveAccordion(obj[key])}
       </CustomAcc>
   ))

}
class Skill_Lang extends React.Component{
        render(){

            return (
                recursiveAccordion(this.props)
            )
        }
    
}

export default Skill_Lang