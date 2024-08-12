import React from 'react'
import { Icon, IconProps } from '../Icon'

export function policeBadgeIcon({ iconName = "police-badge", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}