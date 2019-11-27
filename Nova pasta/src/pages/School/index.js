import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../../components/SearchBar';
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
      <ul
        className="collection with-header"
        style={{ paddingBottom: '30px', backgroundColor: '#fff' }}
      >
        <SearchBar />
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
