import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

export default function SchoolItem({ school, onDelete, onSelectItem }) {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-school-modal"
          className={`modal-trigger ${
            school.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={onSelectItem}
        >
          {school.message}
        </a>

        <br />

        <span className="grey-text">
          <span className="black-text">Cod. #{school.id}</span> Nome
          <span className="black-text"> {school.name}</span> em{' '}
          <span className="black-text">{school.location}</span>
        </span>

        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}
