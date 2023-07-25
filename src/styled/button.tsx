import styled from 'styled-components'

export const LightButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  min-height: 40px;
  min-width: 80px;

  background: ${(props) => props.theme.light};
  color: ${(props) => props.theme.contrastText};
  border: 2px solid ${(props) => props.theme.light};
`

export const Button = styled.button`
  font-size: 1rem;
  cursor: pointer;
  color: white;
  border-radius: 4px;
  font-weight: bold;
  min-height: 40px;
  min-width: 80px;

  background: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`
