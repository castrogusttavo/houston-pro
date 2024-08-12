import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mobileSecurityIcon({ iconName = "mobile-security", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}