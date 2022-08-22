import React from "react";
import styled from 'styled-components';
import threshold from '../../../responsive'
class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : {},
            Loaded : false,
            error: false
        }
    }
    componentDidMount(){
        
        //if (window.localStorage.getItem("AboutMe")==null){
        //     fetch("http://ec2-13-57-163-79.us-west-1.compute.amazonaws.com:8000/AboutMe").then((response)=>{
        //         return (response.json())
        //     }).then((json)=>{  
        //         window.localStorage.setItem("AboutMe", JSON.stringify(json))
        //         this.setState({data: json, Loaded: true})
        //     }).catch((error) =>{
        //         console.log(error);
        //         this.setState({error: true});
        //     })
        // } else {
        //     const N = window.localStorage.getItem("AboutMe");
        //     this.setState({data: JSON.parse(N), Loaded: true});

        // }
        this.setState({data: require('./AboutMe.json'), Loaded: true})

    }
    render(){
        const { Loaded, data} = this.state;
        if (!Loaded){
            if (this.state.error === false){
                return (
                    <div>
                       One Moment Please
                    </div>
                )
            } else if (this.state.error === true){
                return (<div style = {{fontSize: "3rem"}}>
                Oop! An Error Occured. Please Try Again Later.
                </div>)
            }
        } 
        const OuterDiv = styled.div`
        padding: 2rem;

        `;
        const ImgStyle = styled.img`
        width: 100%;
        border: 1px solid grey;
        border-radius: 1rem;
        margin-bottom: 1rem;


        animation-name: mymove;
        animation-duration: 1.5s;
        @keyframes mymove {
            from {opacity: 0;}
            to {opacity: 1;}
            }
        @media screen and (min-width: ${threshold}px){
            width: 400px ;
            margin-right: 2rem;
            margin-bottom: 2rem;
            float: left;
        }
        
        `;
        const TextStyle= styled.div`
            font-size: 2rem;
            text-align: center;

            animation-name: mymove;
            animation-duration: 3s;
            @keyframes mymove {
                from {opacity: 0;}
                to {opacity: 1;}
                }
            @media screen and (min-width: ${threshold}px){
                font-size: 2rem;
            }
        `;
        return (
        <OuterDiv>
            <ImgStyle src={require('../../../images/Cropped.png')}/>
            <TextStyle>
                {data["About Me"]}
            </TextStyle>
        </OuterDiv>
        )
    }
}
export default About;
