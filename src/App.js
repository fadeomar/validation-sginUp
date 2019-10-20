// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import {
  Logo,
  Text,
  TestQusetion,
  InputContainer,
  QuestionContainer,
  ButtonContainer,
  Button,
  VirfyContainer,
  TextVerfiy,
  CheckInput,
  AgreeMessage,
  MauveBtn,
  Label,
  ProofImg,
  Brackline,
  LabelCheckbox,
  MauveBtnBig,
  Anchor,
  LinkDescription
} from "./styeledComponent";
import "./App.css";
import Input from "./Component/Input/Input";
import Dropdown from "./Component/DropDown/Dropdown";
import logoImg from "./assest/logo.jpg";
import aprove from "./assest/proof.jpg";
import validation from './validation'

class App extends Component {
  state = { 
    email:'',
    password:'',
    ConfirmPassword:'',
    isWorker:'no',
    trade:'1',
    city:'',
    isAgree:false,
    emailClass:'',
    passClass:'',
    confirmPassClass:'',
    errEmialMsg:'',
    errPassMsg:'',
    errCityMsg:'',
    errConfirmPassMsg:'',
    errMsg:''
   }

   isValid = (name) => {
    if( name === 'email'){
      validation.email.validate(this.state.email).
      then(e =>{
        this.setState(priveState => ({ ...priveState, emailClass:'true', errEmialMsg:''}))
      })
      .catch(e => {
        this.setState((priveState) => ({...priveState,emailClass:'wrong' , errEmialMsg:e.message}),
        )
      })
 
    }else if( name === 'password'){
      validation.password.validate(this.state.password)
      .then(() => this.setState((priveState) => ({...priveState, passClass:'true', errPassMsg:''})))
      .catch(() => this.setState((priveState) => (
          {...priveState, passClass:'wrong', errPassMsg:'please add a valid password'}
        )))

    }else if( name === 'ConfirmPassword'){
      validation.confirmPassword.validate({password:this.state.password, passwordConfirm:this.state.ConfirmPassword})
      .then(() => this.setState((priveState) => ({...priveState, confirmPassClass:'true', errConfirmPassMsg:''})))
      .catch(() => this.setState((priveState) => ({...priveState, confirmPassClass:'wrong', errConfirmPassMsg:'the password must be match'})))

    }else if (name === 'city'){
      validation.city.validate(this.state.city)
      .then(() => this.setState((priveState) => ({...priveState, cityClass:'true', errCityMsg:''})))
      .catch(() => this.setState((priveState) => (
          {...priveState, cityClass:'wrong', errCityMsg:'please add your town or city'}
        )))
    }
   }

   handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, () => this.isValid(name));
  };

  handelIsWorker = ({target:{name}} ) => {
    
    this.setState((priveState) => (
      {...priveState, isWorker:name, isWorkekClass:`is-worker-${name}`}
      ), () => console.log(this.state))};

      
  handelCheckBox = ({target:{checked}}) => {
    this.setState((priveState) => ({...priveState, isAgree:checked}))
  }
  
  onSubmit = () => {
    const {isAgree, email, password, ConfirmPassword, city} = this.state
    validation.all.validate({
      email,
      password,
      confirmPassword:ConfirmPassword,
      city,
      isAgree
    }).then(() => this.setState((priveState) => (
      {...priveState, errMsg:''}
    ))).catch(({errors}) => this.setState((priveState)=>(
      {...priveState, errMsg:errors[errors.length-1]}
    )))
  }
  render() {
    const options = ["select your trade", "asd1", "asd2", "asd3", "asd4"];
    return (
      <div className="App">
        <Logo src={logoImg} alt={"logo"} />
        <InputContainer>
          <Label>
            <Text>Email</Text>
            <Input type="text" name="email" aria-label="email" placeholder="" onChange={this.handleChange} className={this.state.emailClass} errMsg={this.state.errEmialMsg}/>
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <Text>Create a password</Text>
            <Input
              type="password"
              name="password"
              aria-label="password"
              placeholder=""
              value={this.state.password}
              onChange={this.handleChange}
              className={this.state.passClass}
              errMsg={this.state.errPassMsg}
            />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <Text>ConfirmPassword</Text>
            <Input
              type="password"
              name="ConfirmPassword"
              aria-label="ConfirmPassword"
              value={this.state.ConfirmPassword}
              placeholder=""
              onChange={this.handleChange}
              className={this.state.confirmPassClass}
              errMsg={this.state.errConfirmPassMsg}

            />
          </Label>
        </InputContainer>
        <QuestionContainer>
          <Label>
            <TestQusetion>Are you are worker?</TestQusetion>
            <ButtonContainer>
              <Button name='yes' onClick={this.handelIsWorker} className={'yes' === this.state.isWorker?'isworker':''}>yes</Button>
              <Button name='no' onClick={this.handelIsWorker} className={'no' === this.state.isWorker?'isworker':''}>No</Button>
            </ButtonContainer>
          </Label>
        </QuestionContainer>
        <Dropdown labelText="Trade" name="trade" options={options} onClick={this.handleChange}/>
        <InputContainer>
          <Label>
            <Text>Town or City</Text>
            <Input type="text" name="city" aria-label="city" placeholder="" onChange={this.handleChange} className={this.state.cityClass} errMsg={this.state.errCityMsg}/>
          </Label>
        </InputContainer>
        <VirfyContainer>
          <Label>
            <Text>verification photo</Text>
            <TextVerfiy>
              Please upload a photo of your face holding your trade ID like the
              example below. Please no glare or blur! Once we’ve verified you,
              we’ll delete your photo to protect your identity.
            </TextVerfiy>
          </Label>
          <ProofImg src={aprove} alt={"proof"} />
          <MauveBtn>Updata Photo</MauveBtn>
        </VirfyContainer>
  
        <InputContainer>
          <Label>
            <Text>Protecting you from blacklisting</Text>
            <TextVerfiy>
              To protect your identity, we’ll randomly assign you an earwig ID,
              which is the only thing shown beside your reviews and activity.
            </TextVerfiy>
          </Label>
        </InputContainer>
  
        <Brackline />
  
        <InputContainer>
          <LabelCheckbox>
            <CheckInput type="checkbox" onClick={this.handelCheckBox}/>
            <AgreeMessage>I agree to the earwig Terms of Use.</AgreeMessage>
          </LabelCheckbox>
        </InputContainer>
        {this.state.errMsg && <span className="errMsg">{this.state.errMsg}</span>}
        <InputContainer>
          <MauveBtnBig onClick={this.onSubmit}>Create account</MauveBtnBig>
        </InputContainer>
  
        <Anchor href={"#"} title={"testing"}>
          <LinkDescription>Continue without an account</LinkDescription>
        </Anchor>
      </div>
    );
  }
}
 
export default App;