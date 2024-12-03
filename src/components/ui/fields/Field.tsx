import { ChangeEventHandler, FocusEventHandler, LegacyRef } from 'react'

import FieldLayout from './FieldLayout'

type FieldProps = {
  id?: string
  name?: string
  className?: string
  label?: string
  value: string
  type?: 'text' | 'number' | 'password' | 'email' | 'date'
  required?: boolean
  readOnly?: boolean
  disabled?: boolean
  errorMessage?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
}

export default function Field({
  id,
  name,
  className,
  label,
  value,
  type = 'text',
  required,
  readOnly,
  disabled,
  errorMessage,
  onChange,
  onFocus,
  onBlur,
}: FieldProps) {
  const renderInput = (ref: LegacyRef<HTMLInputElement>) => (
    <input
      ref={ref}
      name={name}
      value={value}
      type={type}
      required={required}
      readOnly={readOnly}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )

  return (
    <FieldLayout
      id={id}
      className={className}
      label={label}
      filled={!!value}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      errorMessage={errorMessage}
      renderInput={renderInput}
    />
  )
}
