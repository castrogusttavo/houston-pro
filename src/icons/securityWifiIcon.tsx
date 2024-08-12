import React from 'react'
import { Icon, IconProps } from '../Icon'

export function securityWifiIcon({ iconName = "security-wifi", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}