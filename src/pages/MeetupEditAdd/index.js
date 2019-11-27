import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { parseISO } from 'date-fns';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import DateTimeInput from './DateTimeInput';
import BannerInput from './BannerInput';
import { Container } from './styles';

/* const schema = Yup.object().shape({
  title: Yup.string().required('Nome é obrigatório'),
  description: Yup.string().required('Descrição é obrigatória'),
  date_and_hour: Yup.date()
    .min(new Date(), 'Não é possível cadastrar datas passadas')
    .required('Data é obrigatório'),
  localization: Yup.string().required('Localização é obrigatório'),
  banner_id: Yup.number(),
});
 */
export default function MeetupEditAdd({ match }) {
  /*   const { id } = match.params; */
  const profile = useSelector(state => state.user.profile);

  async function handleSubmit(data) {
    try {
      await api.post('students', {
        ...data,
        school_id: profile.id,
      });
      toast.success('Aluno criado com sucesso!');
    } catch (err) {
      toast.error('Algo deu errado, tente novamente mais tarde!');
    }
    history.push('/dashboard');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome do aluno" />
        <Input name="year" placeholder="Ano/Turma" />
        <button type="submit">
          {' '}
          <MdAddCircleOutline size={18} /> Salvar aluno
        </button>
      </Form>
    </Container>
  );
}
