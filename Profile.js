import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
//import axios from 'axios';
class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      address:'',
      optionalAddress:'',
      city:'',
      state:'',
      zipCode:''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Profile Management"
           />
           <TextField
             hintText="Enter your Full Name"
             type="text"
             floatingLabelText="Full Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
           <TextField
             type = "text"
             hintText="Enter your address"
             floatingLabelText="Address 1"
             onChange = {(event,newValue) => this.setState({address:newValue})}
             />
           <br/>
           <TextField
             type = "text"
             hintText="Enter your address"
             floatingLabelText="Address 2 (Optional)"
             onChange = {(event,newValue) => this.setState({optionalAddress:newValue})}
             />
           <br/>
           <TextField
             type = "text"
             hintText="Enter your city"
             floatingLabelText="City"
             onChange = {(event,newValue) => this.setState({city:newValue})}
             />
           <br/>
           <TextField
             type = "text"
             hintText="Enter your state"
             floatingLabelText="State"
             onChange = {(event,newValue) => this.setState({state:newValue})}
             />
           <br/>
           <TextField
             type = "number"
             hintText="Enter your zip code"
             floatingLabelText="Zip Code"
             onChange = {(event,newValue) => this.setState({zipCode:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Profile;