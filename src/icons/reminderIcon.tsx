import React from 'react'
import { Icon, IconProps } from '../Icon'

export function reminderIcon({ iconName = "reminder", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}