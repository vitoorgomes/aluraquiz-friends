import styled from 'styled-components'

const ButtonBase = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`

interface Props {
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button: React.FC<Props> = ({ children, type, disabled, ...rest }) => {
  return (
    <ButtonBase type={type} disabled={disabled} {...rest}>
      {children}
    </ButtonBase>
  )
}

export default Button
