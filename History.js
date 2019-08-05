import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



const QuoteHistory = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

class History extends Component{



   /* constructor(props) {
        super(props);
    }*/
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {

        return (

            <div>
                <MuiThemeProvider>
                <div>
                  <AppBar
                      title="Fuel Quote History"
                  />
                    <p className="App-intro">{this.state.apiResponse}</p>
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

                        <RaisedButton label="Enter" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

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
                          <% if(data.length){ 
                            for(var i = 0;i < data.length;i++) { %>
                          <tr>
                            <td><%=(i+1)%></td>
                            <td><%=data[i].gallons></td>
                            <td><%=data[i].address></td>
                            <td><%=data[i].date></td>
                            <td><%=data[i].price></td>
                            <td><%=data[i].total></td>
                          </tr>
                          <% }
                          }
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
const style = {
    margin: 15,
};
export default History;
