import React, {Component} from 'react';
import './App.css';
import styled, {css} from 'styled-components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import DatePicker from 'react-date-picker/dist/entry.nostyle';
import DatePicker from "react-date-picker";
import { makeStyles } from '@material-ui/core/styles';

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


    onChange = date => this.setState({ date });
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    constructor(props) {
        super(props);
        this.state={
            gallons: '',
            address: '',
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
                        required
                        id="standard-required"
                        type="number"
                        onChange ={(newValue => this.setState({gallons:newValue}))} />
                    <br/>
                    <TextField
                        hintfText="Delivery Address"
                        floatingLabelText="Delivery Address"

                        InputProps={{
                            ReadOnly: true,
                        }}
                         />

                    <br/>
                        <TextField
                            id="date"
                            floatingLabelText="Delivery Date"
                            label="Delivery Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    <br/>
                    <TextField
                        hintfText="Suggested Price"
                        floatingLabelText="Suggested Price"
                        id="standard-read-only-input"

                        InputProps={{
                            readOnly: true,
                        }}
                        type="number"
                        onChange ={(newValue => this.setState({price:newValue}))} />
                    <br/>
                    <TextField
                        hintfText="Total Amount Due"
                        floatingLabelText="Total Amount Due"

                        InputProps={{
                            readOnly: true,
                        }}
                        type="number"
                        onChange ={(newValue => this.setState({total:newValue}))} />
                    <br/>
                    <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
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