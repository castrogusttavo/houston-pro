import React from 'react';
import { Icon, IconProps } from '../Icon';

export function WebhookIcon({
  iconName = 'webhook',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
