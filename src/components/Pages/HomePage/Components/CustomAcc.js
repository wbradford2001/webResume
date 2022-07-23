import React from "react";

import styled from 'styled-components';
import {Accordion} from "react-bootstrap";

const DivStyle = styled.div`
    border: 1px solid rgba(0,0, 0, 0.125);
    background-color:white;
    border-radius: 3px;
    padding: 1rem;
    display: flex;


    
`;


class CustomAcc extends React.Component{
    constructor(props){
        super(props);
        this.animateStyle = {};
        
    }
    render(){
        if (typeof this.props.animateDelay !== "undefined"){
            this.animateStyle = {
                opacity: 0,
                animationName: "SkillAnimte",
                animationDuration: "1s",
                animationIterationCount:"1",
                animationFillMode: "forwards",
                backgroundColor: "rgba(255, 255, 255, ${color})",
                animationDelay: this.props.animateDelay       
            }
        }
        let tit = this.props.title
        let stars = 0
        if (this.props.title.includes("-")){
            tit = this.props.title.split("-")[0]
            stars = this.props.title.split("-")[1]
        } 
        const starsElement = []
        if (stars > 0){
            starsElement.push(<div key={this.props.title}style={{width: "1rem"}}></div>)
            for (let i=0; i<5; i++){
                if (i < stars){
                    starsElement.push(
                        <svg key={i} preserveAspectRatio="xMidYMid meet" viewBox="0 -10 45 60" style = {{fill: "rgb(210, 210, 0)"}}  xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M11.65 44 16.3 28.8 4 20H19.2L24 4L28.8 20H44L31.7 28.8L36.35 44L24 34.6Z"/></svg>
                        )
                    } else {
                        
                        starsElement.push(
                            <svg  key={i} preserveAspectRatio="xMidYMid meet" viewBox="0 -10 45 60" style = {{fill: "grey"}}  xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M11.65 44 16.3 28.8 4 20H19.2L24 4L28.8 20H44L31.7 28.8L36.35 44L24 34.6Z"/></svg>
                            )
                        }
                    }
                }
                if (typeof this.props.children === "undefined"){
                    return (<DivStyle style = {this.animateStyle}>{tit}{starsElement}</DivStyle>)
                }
                
                let color = 1;
                if (typeof this.props.background !== "undefined"){
                    color = 0.1;
                }

                
        return (
            
            
            <Accordion  defaultActiveKey={this.props.active} style={this.animateStyle}>
            <Accordion.Item  eventKey="0" style = {{backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
                <Accordion.Header >{tit}{starsElement}</Accordion.Header>
                    <Accordion.Body style = {{backgroundColor: {color}}}>
                        {this.props.children}                          
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        )
    }
}

export default CustomAcc;