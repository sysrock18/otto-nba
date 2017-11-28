import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Teams extends Component {
  render() {
    return (
      <section name="Teams">
        <div>
          {this.props.standings[0] ? this.props.standings[0]['@name'] : null}
        </div>
        <Table
          selectable={false}
          multiSelectable={false}>
          <TableHeader
            displaySelectAll={false}
            enableSelectAll={false}
            adjustForCheckbox={false}>
            <TableRow selectable={false}>
              <TableHeaderColumn></TableHeaderColumn>
              <TableHeaderColumn>T</TableHeaderColumn>
              <TableHeaderColumn>G</TableHeaderColumn>
              <TableHeaderColumn>W</TableHeaderColumn>
              <TableHeaderColumn>L</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} preScanRows={false}>
          {this.props.standings[0] ? this.props.standings[0].teamentry.map((item) => { return (
            <TableRow key={item.team.ID} selectable={false}>
              <TableRowColumn><Avatar src={`http://localhost:3001/images/${item.team.Abbreviation.toLowerCase()}.png`} /></TableRowColumn>
              <TableRowColumn>{`${item.team.City} ${item.team.Name}`}</TableRowColumn>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
            </TableRow>
          );}) : null}
          </TableBody>
        </Table>

        <div>
          {this.props.standings[1] ? this.props.standings[1]['@name'] : null}
        </div>
        <Table
          selectable={false}
          multiSelectable={false}>
          <TableHeader
            displaySelectAll={false}
            enableSelectAll={false}
            adjustForCheckbox={false}>
            <TableRow selectable={false}>
              <TableHeaderColumn></TableHeaderColumn>
              <TableHeaderColumn>T</TableHeaderColumn>
              <TableHeaderColumn>G</TableHeaderColumn>
              <TableHeaderColumn>W</TableHeaderColumn>
              <TableHeaderColumn>L</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} preScanRows={false}>
          {this.props.standings[1] ? this.props.standings[1].teamentry.map((item) => { return (
            <TableRow key={item.team.ID} selectable={false}>
              <TableRowColumn><Avatar src={`http://localhost:3001/images/${item.team.Abbreviation.toLowerCase()}.png`} /></TableRowColumn>
              <TableRowColumn>{`${item.team.City} ${item.team.Name}`}</TableRowColumn>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
            </TableRow>
          );}) : null}
          </TableBody>
        </Table>
      </section>
    );
  }
}

export default Teams;
