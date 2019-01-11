import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { currencyUpdates } from "./actions/index";
import Table from '@material-ui/core/Table';
import TableHeaderColumn from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHeader from '@material-ui/core/TableHead';
import TableRowColumn from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
    return { currencies: state.currencies };
  };

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        currencyUpdates
    },
    dispatch,
  )
class RestComponent extends React.Component{
 
    constructor(props) {
        super(props);
        this.state = {
            currencies: [],
        };
    }    

    restCall =()=>{
        axios.get("https://api.coinmarketcap.com/v1/ticker/").then((res)=>{
            console.log(res.data);
            //store.dispatch(currencyUpdate({ currencies : res.data }));
            this.props.currencyUpdates( res.data );
            console.log((res.data));
            }).catch((error)=>{
            //on error
            alert("There is an error in API call.");
            });
    }
    componentDidMount() {
        this.restCall();
    }
        render(){   
            let result= this.props.currencies
            return ( 
               <div>
                  <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>priceUSD</TableHeaderColumn>
                            <TableHeaderColumn>symbol</TableHeaderColumn>
                            <TableHeaderColumn>percent_change_1h</TableHeaderColumn>
                            <TableHeaderColumn>percent_change_7d</TableHeaderColumn>
                            <TableHeaderColumn>percent_change_24h</TableHeaderColumn>
                            <TableHeaderColumn>last_updated</TableHeaderColumn>
                        </TableRow><br/>
                    </TableHeader>
                <TableBody>
                      {Object.values(result).map(function(key, index) {
                          console.log(`---${index}`);
                          const currencyCode = `BTC ETH XLM`
                          if(currencyCode.includes(key["symbol"])){
                          return <TableRow key={index}>
                                <TableRowColumn>{key["id"]}</TableRowColumn>
                                <TableRowColumn>{key["name"]}</TableRowColumn>
                                <TableRowColumn>{key["price_usd"]}</TableRowColumn>
                                <TableRowColumn>{key["symbol"]}</TableRowColumn>
                                <TableRowColumn>{key["percent_change_1h"]}</TableRowColumn>
                                <TableRowColumn>{key["percent_change_7d"]}</TableRowColumn>
                                <TableRowColumn>{key["percent_change_24h"]}</TableRowColumn>
                                <TableRowColumn>{key["last_updated"]}</TableRowColumn>
                            </TableRow >
                          }
                        })} 
                    </TableBody>
                </Table>
                </div>
            );
        }
} 
export default connect(mapStateToProps,mapDispatchToProps)(RestComponent);


//let output = document.getElementById('output');       
        //   let result= this.state.currencies.map(name =>{
        //     //console.log(typeof(name));<li key={name.id}>{name.id}</li>  <tr><td>${name.id}</td></tr>
        //    // let html = `<table><tr>ID<th></th></tr>`name
        //    return name;
        // });
           //output.innerHTML = result
           
           //result.map((key1, value1) => Object.keys(key1)[0]));
           //// this.componentDidMount = this.componentDidMount.bind(this);