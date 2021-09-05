import React, { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

export default function Button({
  variant,
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        'btn',
        {
          [variant || '']: !!variant,
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'success' | 'warning' | 'error';
}
