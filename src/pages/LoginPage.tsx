import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    max-width: 460px;
    background: pink;
`;

const styledInput = styled.input`
    padding: 10px 15px;
    line-height: 24px
`;

interface LoginPageProps {

};

export const LoginPage = (props: LoginPageProps) => {

    const [firstname, setFirstname] = useState<string>();
    const [lastname, setLastname] = useState<string>();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();


    return (
        <Container>
            
        </Container>
    )
}