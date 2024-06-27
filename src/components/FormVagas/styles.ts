import styled from 'styled-components'

export const FormPesq = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 458px) {
    .form {
      display: flex;
      justify-content: center;
    }
    .btnPesquisar,
    .campo {
      max-width: 60%;
    }
  }
`

export const BtnPesq = styled.button`
  background-color: ${(props) => props.theme.corPrimaria};
  border: 1px solid ${(props) => props.theme.corPrimaria};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const InputPesq = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corPrimaria};
`
