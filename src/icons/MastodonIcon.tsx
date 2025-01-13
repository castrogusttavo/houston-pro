import React from 'react';
import { Icon, IconProps } from '../Icon';

export function MastodonIcon({
  iconName = 'mastodon',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
