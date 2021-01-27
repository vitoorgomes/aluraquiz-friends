import React from 'react'
import styled from 'styled-components'
import { IThemeProps } from '../../../pages/_app'

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;

  ::placeholder {
    color: ${({ theme }: IThemeProps) => theme.colors.secondary};
    opacity: 1;
    font-family: Lato;
    font-style: normal;
    line-height: 24px;
  }
`

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const Input: React.FC<Props> = ({ onChange, placeholder, ...props }) => {
  return (
    <div>
      <InputBase placeholder={placeholder} onChange={onChange} {...props} />
    </div>
  )
}

export default Input
