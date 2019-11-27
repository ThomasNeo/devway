import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container } from './styles';

import ChoosePicture from '../../../assets/selecionarimagem.png';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('meetup');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    console.tron.log(defaultValue);
  }, [ref]) // eslint-disable-line

  async function handleChange(e) {
    console.tron.log(file);
    console.tron.log(preview);
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    console.tron.log(response.data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        <img src={preview || ChoosePicture} alt="Selecionar imagem" />

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
