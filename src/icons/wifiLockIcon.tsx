import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wifiLockIcon({ iconName = "wifi-lock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}