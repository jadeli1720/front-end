import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';


const HomeContainer = styled.div`
    margin: 20px 15px;
`;

const Title = styled.h1`
    margin: 20px 0;
`;

const Intro = styled.p`
    font-size: 16px
    font-weight: bold;
`;

const Heading = styled.h3`
    font-size: 18px;
`;

const SubHeading = styled.h5`
    font-size: 16px;
`;

const LinkContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex: wrap;
    justify-content: center;
    align-items: center;


    .button {
        border: 1px solid grey;
        border-radius: 5px;
        color: black;
        margin: 10px;
        padding: 8px 5px;
        text-align: center;
        width: 140px;
    }
    
`;

const Card = styled.div`
    border: 1px solid grey;
    border-radius: 5px;
    margin: 20px 5px;
    padding: 15px;

    img {
        margin: 10px 0px;
    }
`;

const LandingPage = () => {

  return (
    <HomeContainer>
        <Title>How much sleep do you need to optimize your life?</Title>
        <Intro>Track your sleep and mood and we will figure out how much sleep you need to live your best life.</Intro>
        <LinkContainer>
            <Link to="/login" className="button" >Login</Link>
            <Link to="/signup" className="button" >Create Account</Link>
        </LinkContainer>
        <Heading>sleepmood basics</Heading>
        <Card>
            <h5>Sample Graph</h5>
            <img src='https://i.imgur.com/dPj5x0n.png' alt='Sample Graph' />
            <p>Your sleep data will be calculated and then graphed allowing you to see variations in you sleep time by night</p>
        </Card>
        <Card>
            <h5>Mood</h5>
            <img src="https://i.imgur.com/WO5mgjr.png" alt="Example mood buttons" />
            <p>Add your mood by using the emoji score system and based on hours slept, we will determine how many hours of sleep you need to feel your very best.</p>
        </Card>
        <Card>
            <h5>Connect</h5>
            {/* ? */}
            <p>Connect our sleep tracker to your wearable technology and let it do the sleep tracking for you.</p> 
        </Card>
       
    </HomeContainer>
  )
}

export default LandingPage;