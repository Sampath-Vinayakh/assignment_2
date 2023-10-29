import styled from "styled-components";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const ImageBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: calc(100vh - 8rem);
  align-items: center;
`;

const Image = styled.img`
  max-width: 543.22px;
  width: 100%;
  height: 60%;
`;

const FormBox = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  height: calc(100vh - 8rem);
  align-items: center;
  box-shadow: 0 10px 20px rgba(77, 77, 77, 0.19),
    0 6px 6px rgba(77, 77, 77, 0.19);
  border-radius: 10px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Form = styled.form`
  flex: 1;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 1500px) {
    padding: 8rem;
  }
  @media screen and (max-width: 1000px) {
    padding: 6rem;
  }
  @media screen and (max-width: 600px) {
    padding: 3rem;
  }
  @media screen and (max-width: 500px) {
    padding: 1.5rem;
  }
`;

const Heading = styled.h2`
  line-height: 1.1;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9em;
  border: 1px solid gray;
  border-radius: 10px;
  line-height: 1.1;
`;

const InputCheckbox = styled.input.attrs({ type: "checkbox" })``;

const LabelText = styled.label`
  font-weight: 500;
  color: ${(props) => (props.variant === "checkbox" ? "#737b86" : "black")};
  margin-left: ${(props) => (props.variant === "checkbox" ? "1rem" : "0")};
`;

const AnchorTag = styled.a`
  color: #f78719;
  text-decoration: ${(props) => (!props.textDecoration ? "none" : "inital")};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div``;

const Button = styled.button`
  width: 60%;
  align-self: center;
  padding: 0.9em 0;
  background-color: #1575a7;
  color: white;
  line-height: 1.1;
  border: none;
  border-radius: 7px;
  margin: 2rem 0;
  cursor: pointer;

  @media screen and (max-width: 1500px) {
    width: 70%;
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  text-align: center;
`;

function Login() {
  return (
    <Section>
      <ImageBox>
        <Image src="image.png" alt="Image" />
      </ImageBox>
      <FormBox>
        <Form>
          <Heading>Login</Heading>
          <InputGroup>
            <LabelText htmlFor="login">Login ID</LabelText>
            <Input type="text" id="login" placeholder="Enter Login ID" />
          </InputGroup>
          <InputGroup>
            <LabelText htmlFor="password">Password</LabelText>
            <Input type="password" id="password" placeholder="Enter password" />
          </InputGroup>
          <Wrapper>
            <Container>
              <InputCheckbox type="checkbox" id="remember-me" />
              <LabelText htmlFor="remember-me" variant="checkbox">
                Remember Me
              </LabelText>
            </Container>
            <AnchorTag href="#">Change Password</AnchorTag>
          </Wrapper>

          <Container>
            <InputCheckbox type="checkbox" id="terms-conditions" />
            <LabelText htmlFor="terms-conditions" variant="checkbox">
              Agree to{" "}
              <AnchorTag href="#" textDecoration={true}>
                Terms & Conditions
              </AnchorTag>
            </LabelText>
          </Container>
          <Button>Login</Button>
          <Paragraph>
            Don't have an acccount?{" "}
            <AnchorTag href="#" textDecoration={true}>
              Register Here
            </AnchorTag>
          </Paragraph>
        </Form>
      </FormBox>
    </Section>
  );
}

export default Login;
