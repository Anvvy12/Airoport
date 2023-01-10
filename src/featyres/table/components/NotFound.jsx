import React from 'react';
import '../styles/not-found.scss';

const NotFound = () => {
  return (
    <tbody>
      <tr>
        <td colSpan="7">
          <div className="not-found">
            <div className="not-found__text">Немає рейсів</div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default NotFound;
