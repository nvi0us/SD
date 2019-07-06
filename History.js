import React, {Component} from 'react';
import './App.css';
import styled, {css} from 'styled-components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const QuoteHistory = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

class History extends Component{



    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <MuiThemeProvider>
                <div>
                  <AppBar
                      title="Fuel Quote History"
                  />
                </div>
                <QuoteHistory>
                    <br/>
                    <div >
                        <TextField
                            id="date"
                            floatingLabelText="Search by Date:"
                            label="Delivery Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    <table>
                        <div>
                        <thead>
                        <tr>
                            <th scope="col">Gallons Requested</th>
                            <th scope="col">Delivery Address</th>
                            <th scope="col">Delivery Date</th>
                            <th scope="col">Suggested Price</th>
                            <th scope="col">Total Amount Due</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td colspan="5" >Populated by Database</td>
                        </tr>

                        </tbody>
                        </div>
                    </table>
                    </div>
                    <div>
                    </div>
                </QuoteHistory>
                </MuiThemeProvider>
            </div>


        );
    }
}

export default History;