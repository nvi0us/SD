import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const QuoteHistory = styled.div`
    padding-top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;



class QuoteForm extends Component{

    state ={
        page: 'quote',
        date: new Date(),
    };

    constructor(props) {
        super(props);
        this.state={
            gallons: '',
            address: '',
            state: '',
            date: '',
            month: '',
            price: '',
            total: '',       
        }
    }

    render() {
        return (

            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Fuel Quote Form"
                        />
                    </div>

                <QuoteHistory>
                    <div>
                    </div>
                    <div>
                    <TextField
                        hintfText="How many Gallons?"
                        floatingLabelText="Gallons"
                        required={true}
                        id="standard-required"
                        type="number"
                        onChange ={(newValue => this.setState({gallons:newValue}))} />
                    <br/>
                    <TextField
                        hintfText="Delivery Address"
                        disabled={true}
                        label="Delivery Address"
                        shrink={true}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={this.state.apiResponse}
                         />

                    <br/>
                        <TextField
                            id="date"
                            floatingLabelText="Delivery Date"
                            type="date"
                            defaultValue="2019-08-04"
                            required={true}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange ={(newValue => this.setState({date:newValue}))}
                        />
                    <br/>
                    <TextField
                        hintfText="Suggested Price"
                        disabled={true}
                        defaultValue={<% if(data.length){ %>
                          <%=data[i].price%>
                          <% }}}else{ %>
                              "Suggested Price"    
                          <% } %>
                         />
                    <br/>
                    <TextField
                        hintfText="Total Amount Due"
                        disabled={true}
                        defaultValue={<% if(data.length){ %>
                          <%=data[i].total%>
                          <% }}}else{ %>
                              "Total Price"   
                          <% } %> />
                    <br/>
                    <br/>
                        <RaisedButton label="Get Price" disabled={ if (this.state.date === '' or this.state.gallons === ''){
                            true}
                            else{
                            false                                                                       
                            }} 
                        primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                        <RaisedButton label="Submit" disabled={ if (this.state.date === '' or this.state.gallons === ''){
                            true}
                            else{
                            false                                                                       
                            }}  
                        primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

                    </div>

                </QuoteHistory>
                </MuiThemeProvider>
            </div>


        );
    }
}
const style = {
    margin: 15,
};
export default QuoteForm;
