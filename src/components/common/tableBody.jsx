import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    console.log(item, column);
    if (column.content) return column.content(item);

    const result = _.get(item, column.path);
    const url = "/movie/" + item._id;
    if (column.path === "title") {
      return (
        <Link to={url} className="clickable">
          {result}
        </Link>
      );
    } else {
      return result;
    }
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
export default TableBody;
