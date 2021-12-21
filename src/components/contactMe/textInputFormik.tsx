
import * as React from "react";
const InputFeedback = ({ children }) => (
  <span className="text-danger">{children}</span>
)

const Label = ({ error, children, ...props }) => {
  return <label {...props}>{children}</label>
}

const TextInput = ({
    field: { name, ...field }, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    className,
    label,
    rows,
    ...props
  }) => {
    const error = errors[name]
    const touch = touched[name]
    return (
      <div className="contactMe__form">
        <Label className="contactMe__form-title" htmlFor={name} error={error}>
          {label}
        </Label>
        <textarea
          id={name}
          rows={rows}
          className="contactMe__form-input"
          {...field}
          {...props}
        />
        {touch && error && <InputFeedback>{error}</InputFeedback>}
      </div>
    )
  }
export default TextInput;