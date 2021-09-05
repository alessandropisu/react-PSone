import React, { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

export default function Container({
  label,
  variant,
  children,
  className,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={classNames(
        'container',
        {
          [variant || '']: !!variant,
        },
        className
      )}
      {...rest}
    >
      {label && <label className="title">{label}</label>}
      {children}
    </div>
  );
}

export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  label?: any;
  variant?: 'dark' | 'light';
}
