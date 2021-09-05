import classNames from 'classnames';
import React, { ComponentPropsWithoutRef } from 'react';

export default function Radio({ children, className, ...rest }: RadioProps) {
  return (
    <label>
      <input type="radio" {...rest} />
      <span className={classNames('option', className)}>
        {children}
        <span className="click" />
      </span>
    </label>
  );
}

export interface RadioProps extends ComponentPropsWithoutRef<'input'> {}
