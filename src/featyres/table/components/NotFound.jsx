import React from 'react';
import '../styles/not-found.scss';

const NotFound = () => {
  return (
    <tbody className="not-found-body">
      <tr colSpan="6" className="not-found-container">
        <td className="not-found">
          <span className="not-found__text">Немає рейсів</span>
        </td>
      </tr>
    </tbody>
  );
};

export default NotFound;
