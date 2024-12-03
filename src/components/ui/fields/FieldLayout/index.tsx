import { MouseEventHandler, ReactNode } from 'react'

import useFocus from './useFocus'

import classes from './field-layout.module.scss'

type PhoneFieldProps = {
  id?: string
  label?: string
  className?: string
  filled: boolean
  required?: boolean
  readOnly?: boolean
  disabled?: boolean
  errorMessage?: string
  renderInput: (ref: any) => ReactNode
}

export default function NewFieldLayout({
  id,
  label,
  className,
  filled,
  required,
  readOnly,
  disabled,
  errorMessage,
  renderInput,
}: PhoneFieldProps) {
  const { inputRef, wrapperRef, focused } = useFocus(disabled || readOnly)

  const focusInput = () => inputRef?.current?.focus()

  const handleWrapperClick: MouseEventHandler<HTMLDivElement> = () =>
    focusInput()

  const containerClassName = errorMessage
    ? classes.input_container_error
    : classes.input_container

  const labelClassName =
    filled || focused ? classes.label_top : classes.label

  const renderedLabel = (
    <label className={labelClassName}>
      {label}
      {required && <span className={classes.asterisk}>*</span>}
    </label>
  )

  const errorClassName = focused ? classes.error_focused : classes.error

  return (
    <div
      ref={wrapperRef}
      id={id}
      className={className}
      onClick={handleWrapperClick}
    >
      <div className={containerClassName}>
        {renderInput(inputRef)}
        {renderedLabel}
      </div>
      <p className={errorClassName}>{errorMessage}</p>
    </div>
  )
}
