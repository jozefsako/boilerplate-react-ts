import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  border-radius: 15px;
  width: 100%;
  max-width: 1200px;
  height: 800px;
  background: #fff;
  margin: 100px auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const StyledImg = styled.div`
  height: 800px;
  max-width: 600px;
  width: 100%;
  border-radius: 0 15px 15px 0;
  background-image: url("https://unsplash.it/1200");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Input = styled.input`
  padding: 10px 15px;
  line-height: 24px;
  margin: 0 0 20px 0;
`;

const ButtonMixing = css`
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 10px;
  width: 100%;
`;

const PrimaryButton = styled.button`
  ${ButtonMixing};
  color: #fff;
  background: #1a1a1a;
  border-color: #1a1a1a;
`;

const Title = styled.span`
  width: 100%;
  display: block;
  font-size: 30px;
  color: #555;
  line-height: 1.2;
  text-align: center;
  margin: 0 0 40px 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0 60px 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  justify-content: center;
  width: 50%;
`;

interface LoginPageProps {}

export const LoginPage = (props: LoginPageProps) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [login, setLoginPage] = useState<boolean>(false);
  const [user, setUser] = useState<any>();

  const handleClick = (e: any) => {
    e.preventDefault();
    setLoginPage(!login);
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      };

      fetch("http://localhost:3010/users/whoami", requestOptions)
        .then((data) => {
          return data.json();
        })
        .then((result) => {
          setUser(result);
        });
    }
  };

  console.log(user);
  return (
    <Card>
      <Container>
        <InputContainer>
          <Title>{login ? "Login" : "Create account"}</Title>

          <Input
            type="text"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Your Password"
            onChange={handleChange}
            required
          />

          <ButtonsContainer>
            <PrimaryButton onClick={handleSubmit}>
              {login ? "Login" : "Sign-up"}
            </PrimaryButton>
          </ButtonsContainer>

          <span style={{ fontSize: "14px" }}>
            {login ? (
              <>
                Dont have an account ?
                <a onClick={handleClick}>
                  <strong> Sign-up in here</strong>
                </a>
              </>
            ) : (
              <>
                Already have an account ?
                <a onClick={handleClick}>
                  <strong> Log-in here</strong>
                </a>
              </>
            )}
          </span>
        </InputContainer>
        <StyledImg />
      </Container>
    </Card>
  );
};
