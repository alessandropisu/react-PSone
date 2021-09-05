import React, { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

export default function Progress({
  label,
  variant,
  value,
  className,
  ...rest
}: ProgressProps) {
  return (
    <div
      className={classNames(
        'progress',
        {
          [variant || '']: !!variant,
        },
        className
      )}
      {...rest}
    >
      <div className="bar" style={{ width: `${value}%` }} />
      {label && <div className="subtitle">{label}</div>}
    </div>
  );
}

export interface ProgressProps extends ComponentPropsWithoutRef<'div'> {
  label?: any;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'indeterminate';
  value?: string | number;
}
