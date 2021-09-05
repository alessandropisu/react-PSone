import React, { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

export default function Input({ label, className, ...rest }: InputProps) {
  return (
    <div className="field">
      {label && <label>{label}</label>}
      <input className={classNames('input', className)} {...rest} />
    </div>
  );
}

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
}
