const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const combinedClassName = `${baseClass} ${className}`.trim()

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
