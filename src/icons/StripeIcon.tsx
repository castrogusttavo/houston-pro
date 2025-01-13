import React from 'react';
import { Icon, IconProps } from '../Icon';

export function StripeIcon({
  iconName = 'stripe',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
