import { connect } from "react-redux";
import React, { Component } from "react";
import {readWeather} from "../actions"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
class Home extends Component {
  componentDidMount(){
    this.props.readWeather()
  }
  
renderWeather(){
  return (
    Object.keys(this.props.weather).map((location) => 
    <TableRow key={location}>
      <TableCell>{this.props.weather[location][0]}</TableCell>
      <TableCell align="right">{this.props.weather[location][1]}</TableCell>
      <TableCell align="right">{this.props.weather[location][2]}</TableCell>
      <TableCell align="right">{this.props.weather[location][3]}</TableCell>
      <TableCell align="right">{this.props.weather[location][4]}</TableCell>
    </TableRow>
    )
  )
}

  render(){
    return (
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table className={useStyles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell align="right">現在気温</TableCell>
                <TableCell align="right">気圧（hPa）</TableCell>
                <TableCell align="right">湿度（％）</TableCell>
                <TableCell align="right">天気</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderWeather()}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ weather: state.weather });

const mapDispatchToProps = { readWeather };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
