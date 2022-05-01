import styled from 'styled-components';

export const Container = styled.main`
  align-items: center;
  background-color: #F0F0F0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 15vw;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
`;

export const Form = styled.form`
  align-items: center;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: row;
  margin-bottom: 4rem;
`;

export const FormInput = styled.input`
  border-radius: 5px 0 0 5px;
  border: none;
  font-size: 1rem;
  line-height: 1.25rem;
  padding: 15px;
  width: 300px;

  &:focus {
    outline: none;
  }
`;

export const FormButton = styled.button`
  background-color: #FFCB47;
  border-radius: 0 5px 5px 0;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.25rem;
  padding: 15px 20px;
`;

export const Grid = styled.section`
  width: 100%;
`;

export const GridColumn = styled.article`
  line-height:0;
  -webkit-column-count:4;
  -webkit-column-gap:4px;
  -moz-column-count:4;
  -moz-column-gap:4px;
  column-count:4;
  column-gap:10px;
`;

export const Image = styled.img`
  height: auto;
  margin-bottom: 10px;
  width: 100%;
`;
