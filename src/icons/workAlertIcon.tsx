import React from 'react'
import { Icon, IconProps } from '../Icon'

export function workAlertIcon({ iconName = "work-alert", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}