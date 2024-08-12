import React from 'react'
import { Icon, IconProps } from '../Icon'

export function appleReminderIcon({ iconName = "apple-reminder", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}