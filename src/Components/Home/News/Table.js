import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import EditWatchlist from './EditWatchlist';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    width: '100%',
  },
});


function createData(id, ticker) {
  return { id, ticker };
}



class WatchlistTable extends Component {

  constructor() {
    super()

    this.state = {
      edit: false
    }
  }

  updateTicker = (ticker, id) => {
    console.log(ticker, id);
    
    axios.put(`/api/update`, {ticker, id}).then(res => {

    }).catch(err => {
      console.log('BERROR', err);
    })
  }

  deleteRow = (e) => {

    axios.delete(`/api/delete/${e}`).then(res => {
      console.log('deleted');
      console.log(e)
    }).catch(console.log)

  }

  toggleEdit = () => {
    // console.log('fuck')
    this.setState({
      edit: !this.state.edit
    })
  }

  handleChange = e => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  render(){

  
  const { classes } = this.props;
  
  let rows = [];

  console.log(this.props.watchlist);
  (this.props.watchlist ? 
    rows = this.props.watchlist.map(row => {
      return createData(row.id, row.ticker)
    })
    :
    rows = [
      
    ]
  )

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Watchlist</TableCell>
            <TableCell align='center'> </TableCell>
            <TableCell align='center'> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="center">
                { this.state.edit === false ?
                  row.ticker
                  :
                  <EditWatchlist toggleEdit={this.toggleEdit} updateTicker={this.updateTicker} ticker={row.ticker} id={row.id}/>
                }
              </TableCell> 
              <TableCell align="center"> <button onClick={() => this.toggleEdit()}>Edit</button> </TableCell> 
              <TableCell align="center"> <button onClick={() => this.deleteRow(row.id)}>Delete</button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
}

WatchlistTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WatchlistTable);