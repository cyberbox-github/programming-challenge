import styled from 'styled-components'

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
