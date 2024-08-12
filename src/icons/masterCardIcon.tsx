import React from 'react'
import { Icon, IconProps } from '../Icon'

export function masterCardIcon({ iconName = "master-card", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}