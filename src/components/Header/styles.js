import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #2c3e50;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: block;
    margin-top: 2px;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
  }

  aside {
    display: flex;
    align-items: center;
  }

  button {
    margin: 0 0 0 15px;
    width: 70px;
    height: 42px;
    background: #fbc531;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#fbc531')};
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
`;
