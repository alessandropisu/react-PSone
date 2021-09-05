import classNames from 'classnames';
import React, { ComponentPropsWithoutRef } from 'react';

export default function Icon({ variant, className, ...rest }: IconProps) {
  return <i className={classNames(`icon ${variant}`, className)} {...rest} />;
}

export interface IconProps extends ComponentPropsWithoutRef<'i'> {
  variant:
    | 'ddr1'
    | 'ddr2'
    | 'ddr3'
    | 'square'
    | 'triangle'
    | 'circle'
    | 'x'
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-up'
    | 'arrow-down'
    | 'select'
    | 'start'
    | 'l1'
    | 'r1'
    | 'l2'
    | 'r2'
    | 'l3'
    | 'r3'
    | 'psone';
}
