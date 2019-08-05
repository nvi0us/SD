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
            price: 'Suggested Price',
            total: 'Total Price',
            
        };
        if (this.state.date === '' || this.state.gallons === ''){
            this.state= {
                disabled: true,
            }
        }
        else{
            this.state={
                disabled: false,
            }
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
                        />
                    <br/>
                    <TextField
                        hintfText="Suggested Price"
                        disabled={true}
                        defaultValue={this.state.price}
                         />
                    <br/>
                    <TextField
                        hintfText="Total Amount Due"
                        disabled={true}
                        defaultValue={this.state.total} />
                    <br/>
                    <br/>
                        <RaisedButton label="Get Price"  primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
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
