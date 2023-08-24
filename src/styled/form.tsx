import styled from 'styled-components'

export const Label = styled.label`
  margin-right: 24px;
  & {
    input {
      margin-left: 16px;
    }
  }
`

export const FullWidthLabel = styled.label`
  & {
    input,
    textarea {
      width: 100%;
      margin-top: 0.375rem;
      margin-bottom: 0.75rem;
    }
  }
`

export const Input = styled.input`
  font-size: 1rem;
  padding: 8px 16px;
  border: 1px solid ${(props) => props.theme.border};
  &:focus {
    border: 1px solid ${(props) => props.theme.border};
  }
`

export const TextArea = styled.textarea`
  font-size: 1rem;
  padding: 8px 16px;
  border: 1px solid ${(props) => props.theme.border};
  &:focus {
    border: 1px solid ${(props) => props.theme.border};
  }
`
