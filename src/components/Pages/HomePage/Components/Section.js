import React from "react";

import CustomAcc from './CustomAcc';
import Skill_Lang from '../Components/Skill';
import styled from 'styled-components';

import threshold from '../../../../responsive'

class Section extends React.Component{
    constructor(props){
        super(props)
        this.BasicTextRef = React.createRef();
    }
    render(){

        //NAME
        const name = Object.keys(this.props)[0]
        const name_link = this.props[name]["link"]

        //SUBSCRIPT
        let subscript = "";
        if (typeof this.props[name]["subscript"] !== "undefind"){
            subscript = this.props[name]["subscript"];
        }


        //CLIENT
        let clientName = "";
        let clientProfession = "";
        let clientEmail = "";
        if (typeof this.props[name]["client"] !== 'undefined') {
            clientName = (
                <span>                
                {this.props[name]["client"]["name"]}
                </span>
                )
            clientProfession = this.props[name]["client"]["profession"]
            clientEmail = this.props[name]["client"]["email"]
        }
        
        //BASIC TEXT
        const BasicText = (<div key = {"Basic Text" + name} ref = {this.BasicTextRef}>{this.props[name]["Basic Text"]}</div>)

        

        //ADVANCED TEXT
        const AdvancedText = (<div key={"Advanced Text" + name}>{this.props[name]["Advanced Text"]}</div>)
        
        //LINKS
        let linkElements = (<div></div>)
        if (typeof this.props[name]["links"] !== 'undefined'){

            const links = this.props[name]["links"]
            linkElements = links.map((link)=>
                <div key={Object.keys(link)[0] + "key for " + name}>
                    <div>
                        
                        {Object.keys(link)[0]}: <a href = {link[Object.keys(link)[0]]}>{link[Object.keys(link)[0]]}</a>
                    </div>

                </div>  
            )
            linkElements = (<CustomAcc key = {"key"+name} title="Links">{linkElements}</CustomAcc>)
        }


        //SKILLS
        let skillElements = []
        if (typeof this.props[name]["skills"] !== 'undefined'){
            const skills = this.props[name]["skills"]
            skillElements = (
                <CustomAcc key={"Skill Elements Custom Acc key" + name} title = "Skills/Technologies">
                    <Skill_Lang key={"Skill Lang key " + name} {...skills}/>
                </CustomAcc>
            )
            
        }


        //STYLES
        let OuterDiv = styled.div`
            border-top: 1px solid grey;
            margin: 0px;
            background-color: rgba(255, 255, 255, 0.8);


            
            `;
            
            
            let BasicDiv = styled.div`
            padding: 1rem;
            `;
            let NameAndClientCont = styled.div`
                @media screen and (min-width: ${threshold}px){
                    display: flex;
                    justify-content: space-between;
                    
                }
            `;
                let StyledNameCont = styled.div`
                    font-size: 1rem;
                    margin-bottom: 1rem;
                    @media screen and (min-width: ${threshold}px){
                        font-size: 2rem;
                        
                    }                    
                    
                `;
                    let StyledSubscriptDiv = styled.div`
                    font-size: 0.75rem;
                    `;
                let StyledClientCont = styled.div`
                    font-size: 0.75rem;
                    border: 1px solid black;
                    border-radius: 1rem;
                    padding 1rem;
                    margin: 1rem;
                    display: ${({clientName})=> clientEmail == "" ? 'none': 'block'}
                        `;                    
                    let StyledClientName = styled.div`
                    font-size: 1rem;
                    `;
                    let StyledClientEmail = styled.div`
                    font-size: 0.75rem;
                    `;
            let StyledBasicText = styled.div`
            `;
            let AdvancedDiv = styled.div`
            
            `;
                let StyledLinksAndSkills = styled.div`
                margin: 1rem
                `;
                    let StyledSkills = styled.div`

                    `;

        return (
            <OuterDiv>
                    <BasicDiv>
                        <NameAndClientCont>
                            <StyledNameCont>
                                <a href={name_link}>{name}</a>
                                <StyledSubscriptDiv>
                                    {subscript}
                                </StyledSubscriptDiv>
                            </StyledNameCont>
                            <StyledClientCont>
                                <b>Client:  </b> 
                                <StyledClientName>
                                    
                                    {clientName},<i>{clientProfession}</i>
                                </StyledClientName>
                                <StyledClientEmail>
                                    {clientEmail}
                                </StyledClientEmail>
                            </StyledClientCont>
                        </NameAndClientCont>
                        <StyledBasicText>
                            {BasicText}


                        </StyledBasicText>
                    </BasicDiv>
                    <AdvancedDiv>
                        <CustomAcc title="See More" active="1" background = "white">
                            {AdvancedText}  
                            <StyledLinksAndSkills>
                                {linkElements}  
                                <StyledSkills>
                                    {skillElements}                   
                                </StyledSkills>
                            </StyledLinksAndSkills>
                        </CustomAcc>  
                    </AdvancedDiv>
            </OuterDiv>
            )
    }
}
Section = styled(Section)`
border: 1px solid blue`
export default Section;

