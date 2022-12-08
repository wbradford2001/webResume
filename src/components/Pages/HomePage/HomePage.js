import React from "react";
import Section from './Components/Section';
import Skill_Lang from './Components/Skill';
import Alert from 'react-bootstrap/Alert';
import styled from "styled-components";
import CustomAcc from "../HomePage/Components/CustomAcc"


// import '../../../styles/responsiveHomePage.css';
// import BackgroundImage from '../../../images/Cropped.png'
import threshold from '../../../responsive'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : {},
            Loaded : false,
            error: false,
         
        }
        
    }
    componentDidMount(){
        // if (window.localStorage.getItem("HomePage")==null){
        //     fetch("./HomePage.json").then((response)=>{
        //         return (response.json())
        //     }).then((json)=>{ 
        //         window.localStorage.setItem("HomePage", JSON.stringify(json))
        //         this.setState({data: json, Loaded: true})
        //     }).catch((error) =>{
        //         console.log(error);
        //         this.setState({error: true});
        //     })
        // } else {
        //    const data =  window.localStorage.getItem("HomePage")
        //    this.setState({data: JSON.parse(data), Loaded: true})
        // }
        let data = require('./HomePage.json')
        this.setState({data: data, Loaded: true})

        
    }

    
    render(){
        const { Loaded, data} = this.state;
        if (!Loaded){
            if (this.state.error == false){
                return (
                    <div>    
                    </div>
                )
            } else if (this.state.error == true){
                return (
                    <div  style = {{fontSize: "3rem"}}>
                        Oop! An Error Occured. Please Try Again Later.
                    </div>
                )
            }
        }
        
        //SKILLS
        const skills = data["Skills"]["Skills"]

        //Skill elements defined below
        

        //LANGUAGES
        const languages = data["Skills"]["Languages"]
        const LanguageElements = <Skill_Lang {...languages}/>

        //PORTFOLIO
        const Portfolio = data["Sections"][1]["Porfolio"]
        const PortfolioSections = {}
        for (let section of Portfolio){
            let name = Object.keys(section)[0]
            let stuff = section[name]
            for (let section of stuff){
                PortfolioSections[name]=stuff
            }
        }
        


        //EXPERIENCE
        const Experience = data["Sections"][0]["Experience"]
        const ExperienceElements = Experience.map((section, index)=>
            <Section key={index} {...section}></Section>
            )

        //EDUCATION
        const Education = data["Sections"][2]["Education"]
        const EducationElements = Education.map((section, index)=>
            <Section key = {index} {...section}></Section>
        )
        

        
        const MasterDiv = styled.div`
       
            height: 92vh;
            overflow: auto;
            display: block;
            @media screen and (min-width: ${threshold}px){
                display: flex
            }

        
        
        `;
        const RegularDiv = styled.div`
            // animation-name: mymove;
            // animation-duration: 1.5s;
            // @keyframes mymove {
            //     from {opacity: 0;}
            //     to {opacity: 1;}
            //     }
            width: 100%;
            @media screen and (min-width: ${threshold}px){
                height: 100%;
                overflow: auto;
                    width: 80%;
                }
            `;
                const FakeImaveDiv = styled.img`
                width: 100%;
                z-index: -2;

            
                
                

                @media screen and (min-width: ${threshold}px){
                   width: 80%;
                   margin-bottom: 0;
                }
                `;
                const ImageDiv = styled(FakeImaveDiv)`
                    position: fixed;
                    z-index: -5;
                    opacity: 1;


                    @media screen and (min-width: ${threshold}px){
                        width: 80%;
                     }
                `;
                    
                const TextDiv = styled.div`
                    display: block;
                    // position: relative;
                    // height: 0;
                    font-size: 2rem;
                    text-align: center;
                    // bottom: 100px;
                    color: white;
                    margin: 2rem;
                    @media screen and (min-width: ${threshold}px){
                        bottom: 200px;
                    }`;
                    
                    const SubTextDiv = styled.div`
                        border-top: 1px solid white;
                        width: 90%;
                        margin-right: auto;
                        margin-left: auto;
                        font-size: 1rem;`;


                
                const SectionAlert = styled(Alert)`
                    position: sticky;
                    top: 0;
                    z-index: 3;
                    margin: 0px;
                    margin-top: 2rem;
                    `;
                const FirstSectionAlert = styled(SectionAlert)`
                    margin-top: 0rem;
                `;
                    const SubSectionAlert = styled(SectionAlert)`
                        padding: 0.5rem;
                        position: relative;
                        z-index: 1;
                        margin-top: 0rem;
                    `;
                const QuickLinks = styled.div`
                `;

            const SkillLangDiv = styled.div`
                overflow: auto;
                // opacity: 0;
                // animation-name: mymove;
                // animation-duration: 2s;
                // animation-delay: 0.5s;
                // animation-iteration-count:1;
                // animation-fill-mode: forwards;
                // @keyframes mymove {
                //     from {opacity: 0;}
                //     to {opacity: 1;}
                //     }
               
                @media screen and (min-width: ${threshold}px){
                    width: 20%;

                }
            `;
                const SkillLangAlert = styled(SectionAlert)`
                    margin-top: 0rem;
                 

                `;
        const CustomA = styled.a`
        color: white;
        font-size: 1rem`

        const PortfolioElements = Object.keys(PortfolioSections).map((catagory)=>
            <div key={catagory}>
                <SubSectionAlert variant = "info">{catagory}</SubSectionAlert>
                <div>
                    {PortfolioSections[catagory].map((section, index)=>
                        <Section key={index} {...section}></Section>
                    )}
                </div>
    
            </div>
            )

        const SkillsElements = <Skill_Lang {...skills}/>
       



        //to get rid of scroll bar at side
        const body = document.querySelector('body');
        body.setAttribute('style', 'overflow: hidden')
        return (
            <MasterDiv >
                
                <RegularDiv>
                <ImageDiv src={require('./pexels-benjamin-suter-3617500.jpg')}/>
                {/* <FakeImaveDiv src={require('../../../images/Cropped.png')}/>  */}

                    <TextDiv>
                    William Bradford
                    <SubTextDiv>
                        <strong>
                        AWS Certified Developer - Associate
                        </strong>
                    </SubTextDiv>
                    </TextDiv>

                        <FirstSectionAlert variant = "primary" >Experience</FirstSectionAlert>
                        {ExperienceElements}
                        <SectionAlert variant = "primary" >
                        Portfolio</SectionAlert>
                        {PortfolioElements}


                        <SectionAlert variant = "primary" >Education/Certifications</SectionAlert>
                            {EducationElements}

                    <QuickLinks>
                        <SectionAlert variant = "primary" >Quick Links</SectionAlert>

                        <CustomAcc title="LinkedIn">
                            <CustomA href="https://www.linkedin.com/in/williamjbradford/">
                                <strong>
                                https://www.linkedin.com/in/williamjbradford/                                   
                                 </strong></CustomA>

                        </CustomAcc>
                        <CustomAcc title="Github">
                            <CustomA href="https://github.com/wbradford2001"><strong>
                            https://github.com/wbradford2001
                                </strong></CustomA>

                        </CustomAcc>
                        <CustomAcc title="PDF Resume">
                            <CustomA href = {require("./William's Resume (1).pdf")}
                            download="William Bradford Resume">
                                <strong>
                                Download the pdf
                                </strong>
                                </CustomA>

                        </CustomAcc>                        

                    </QuickLinks>
                </RegularDiv>
                <SkillLangDiv>
                        <SkillLangAlert  variant = "success" >Skills</SkillLangAlert>
                        {SkillsElements}
                        <SkillLangAlert variant = "success" >Languages</SkillLangAlert>
                            {LanguageElements}
                </SkillLangDiv>

            </MasterDiv>
        )
    }
}


export default Home;
