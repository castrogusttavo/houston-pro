import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheckmarkBadge04Icon({
  iconName = 'checkmark-badge04',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
