import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';

import { Container, List, ContentList } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('students');

      const data = response.data.map(meetup => ({
        ...meetup,
      }));

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleNew() {
    history.push('/meetup/new');
  }

  return (
    <Container>
      <header>
        <strong>Alunos</strong>

        <button type="button" onClick={handleNew}>
          <MdAddCircleOutline size={18} /> Novo aluno
        </button>
      </header>

      <List>
        {meetups.map(meetup => (
          <ContentList key={meetup.id} to="/dashboard">
            <strong>{meetup.name}</strong>
            <div>
              <p>{meetup.year}</p> <MdChevronRight size={24} color="#fff" />
            </div>
          </ContentList>
        ))}
      </List>

      {/*       <Pagination>
        <span disabled>&laquo;</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&raquo;</span>
      </Pagination> */}
    </Container>
  );
}
