import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import { addSchoolRequest } from '../../../store/modules/school/actions';

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default function AddSchoolModal() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  function handleClearInputs() {
    setName('');
    setLocation('');
    setCnpj('');
    setEmail('');
    setPassword('');
    setPhone('');
  }

  function handleSubmit() {
    dispatch(addSchoolRequest(name, location, cnpj, email, password, phone));

    M.toast({ html: `Escola adicionada com sucesso` });
    handleClearInputs();
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Escola</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="name" className="active">
              Nome da Escola
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            <label htmlFor="location" className="active">
              Localização
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="cnpj"
              value={cnpj}
              onChange={e => setCnpj(e.target.value)}
            />
            <label htmlFor="cnpj" className="active">
              CNPJ
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="active">
              Email
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <label htmlFor="phone" className="active">
              Phone
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="active">
              Senha
            </label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={handleSubmit}
          className="modal-close waves-effect green waves-light btn"
        >
          Salvar
        </a>
      </div>
    </div>
  );
}
