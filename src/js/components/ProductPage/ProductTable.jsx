import React from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

export default function ProductTable({ data }) {
  const mappingTable = (product) => {
    const keys = _.keys(data);
    let table = [];
    keys.forEach((item, id) => {
      table.push(
        <tr key={id + 1}>
          <th className="p-1 text-nowrap">{item}:</th>
          <td className="p-1">{product[item]}</td>
        </tr>
      );
    });
    return [...table];
  };

  return (
    <>
      <table className="table">
        <tbody>{mappingTable(data)}</tbody>
      </table>
    </>
  );
}

ProductTable.propTypes = {
  data: PropTypes.object,
};
