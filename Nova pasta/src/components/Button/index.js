import React from 'react';

export default function Button() {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large green modal-trigger z-depth-3"
      >
        <i className="large material-icons">add</i>
      </a>
    </div>
  );
}
