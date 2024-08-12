import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wpsOfficeIcon({ iconName = "wps-office", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}