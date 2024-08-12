import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bloodTypeIcon({ iconName = "blood-type", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}