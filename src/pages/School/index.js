import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min';

import SchoolItem from './SchoolItem';
import Preloader from '../../components/Preloader';

import {
  getSchoolsRequest,
  deleteSchoolRequest,
  setCurrentRequest,
} from '../../store/modules/school/actions';

export default function School() {
  const { schools, loading } = useSelector(state => state.school);
  const schoolSize = useMemo(() => schools.length, [schools]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchoolsRequest());
  }, [dispatch]);

  function handleSelectItem(id) {
    dispatch(setCurrentRequest(id));
  }

  function handleDelete(id) {
    dispatch(deleteSchoolRequest(id));

    M.toast({ html: 'Ocorrência excluída com sucesso' });
  }

  return (
    <>
      <div className="center-align">
        <i
          className="small material-icons tooltipped"
          data-position="bottom"
          data-tooltip={`Total de ocorrências: ${schoolSize}`}
          style={{ color: '#fff' }}
        >
          assignment
        </i>
      </div>
      <ul
        className="collection with-header"
        style={{ paddingBottom: '30px', backgroundColor: '#fff' }}
      >
        <li className="collection-header">
          <h4 className="center">Lista de Escolas</h4>

          {!loading && schoolSize === 0 && (
            <p className="center">Nenhuma ocorrência registrada</p>
          )}
        </li>

        {loading && <Preloader />}

        {!loading &&
          schoolSize !== 0 &&
          schools.map(school => (
            <SchoolItem
              key={school.id}
              school={school}
              onDelete={() => handleDelete(school.id)}
              onSelectItem={() => handleSelectItem(school.id)}
            />
          ))}
      </ul>
    </>
  );
}
