
const Button = ({ children, id, ...rest }) => {

  return (
    <button id={id} {...rest}>{children}</button>
  )
}

export default Button;