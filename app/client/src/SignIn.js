import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,
  Redirect
} from "react-router-dom"; 

import { Component } from 'react';
import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
} from 'reactstrap';
import './App.css';
 
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      LastName: '',
      Phone: '',
      email: '',
      address: '',
      dateOfBirth: '',
      id: '',
      HMO:'',
      password: '',
      validate: {
        emailState: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
 
    this.setState({
      [name]: value,
    });
  };
 
  validateEmail(e) {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
    const { validate } = this.state;
 
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success';
    } else {
      validate.emailState = 'has-danger';
    }
 
    this.setState({ validate });
  }
 
  // submitForm(e) {
  //   debugger;
  //   e.preventDefault();
  //   console.log(`Email: ${this.state.email}`);
  // }

  render() {
    function SignInHandler(params) {
  

    }
    const { name, LastName, Phone, address, email, password , Id} = this.state;
 
    return (
      <div className="App">
        <h2>Sign In</h2>
        <FormText>The fields marked with an asterisk are mandatory *.</FormText>
        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
          <FormGroup>
            <Label>name *</Label>
            <Input
              name="name"
              id="exampleEmail"
              value={name}
              onChange={(e) => {
                // this.validateEmail(e);
                this.handleChange(e);
              }}/>
         
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="examplePassword"
              placeholder="last name"
              value={LastName}
              onChange={(e) => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">ID number *</Label>
            <Input
           
              name="id"
              id="id"
              placeholder="_________"
              value={Id}
              onChange={(e) => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email *</Label>
            
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
              valid={this.state.validate.emailState === "has-success"}
              invalid={this.state.validate.emailState === "has-danger"}
              value={email}
              onChange={(e) => {
                this.validateEmail(e);
                this.handleChange(e);
              }}
            />
            <FormFeedback>
              Uh oh! Looks like there is an issue with your email. Please input
              a correct email.
            </FormFeedback>
            <FormFeedback valid>
              That's a tasty looking email you've got there.
            </FormFeedback>
         
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Phone</Label>
            <Input

              name="phone"
              id="examplePassword"
              placeholder=""
              value={Phone}
              onChange={(e) => this.handleChange(e)}/>
          </FormGroup>  
          <FormGroup>
            <Label for="examplePassword">address</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
        
              value={address}
              onChange={(e) => this.handleChange(e)}
            />
          </FormGroup> 

          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              value={password}
              onChange={(e) => this.handleChange(e)}
            />
          </FormGroup>
   
     
        <br/>
          <Button onClick={(e)=>SignInHandler(e)}>Submit</Button>
        </Form>
        <Link to = "/SignUp"><button Type="button" class="btn btn-primary btn-lg btn-block" >Sign Up </button></Link>  

      </div>
    );
  }
}
 
export default SignIn;