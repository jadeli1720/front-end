import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import styled from 'styled-components';


const HomeContainer = styled.div`
    margin: 20px 40px;
`;

const Title = styled.h1`
    color: #edebe3;
    font-family: 'Bitter', serif;
    font-size: 24px;
    margin: 20px 0;
`;

const Intro = styled.p`
    color: #cfd2e8;
    font-size: 18px;
    font-weight: bold;
    padding-top: 30px;
    text-align: center;
`;


const LinkContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex: wrap;
    justify-content: center;
    align-items: center;


    .create-account {
        background: #b07568;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        margin: 10px;
        padding: 8px 5px;
        text-align: center;
        width: 140px;
    }

    .login {
        background: #cfd2e8;
        border-radius: 5px;
        color: #232433;
        font-weight: bold;
        margin: 10px;
        padding: 8px 5px;
        text-align: center;
        width: 140px;
    }

`;

const CardContainer = styled.div`
    background: #232433;
    margin: 20px 10px;
`;

const Card = styled.div`
    background: white ;
    border-radius: 5px;
    color: #232433;
    margin: 5px 30px 20px;
    padding: 15px 20px;
`;

const Heading = styled.h3`
    color: #efe3e1;
    font-family: 'Bitter', serif;
    font-size: 20px;
    padding: 20px 30px 5px;
    
`;

const LandingPage = () => {

    return (
        <HomeContainer>
            <Title>How much sleep do you need to optimize your life?</Title>
            <Intro>Let us figure out how many hours of sleep you need to live your best life.</Intro>
            <LinkContainer>
                <Link to="/signup" className="create-account" >Create Account</Link>
                <Link to="/login" className="login" >Login</Link>

            </LinkContainer>
            <CardContainer>
                <Heading>sleepmood basics</Heading>
                <Card>
                    <h5><Icon name="line graph" /> Graphs</h5>
                    <p>Your sleep data will be calculated and then graphed allowing you to see variations in you sleep time by night</p>
                </Card>
                <Card>
                    <h5><Icon name="smile" /> Mood</h5>
                    <p>Add your mood by using the emoji score system and based on hours slept, we will determine how many hours of sleep you need to feel your very best.</p>
                </Card>
                <Card>
                    <h5><Icon name="linkify" /> Connect</h5>
                    <p>Connect our sleep tracker to your wearable technology and let it do the sleep tracking for you.</p>
                </Card>
            </CardContainer>

        </HomeContainer>
    )
}

export default LandingPage;