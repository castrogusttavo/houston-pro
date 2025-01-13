import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AddInvoiceIcon({
  iconName = 'add-invoice',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
