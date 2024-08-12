import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wifiUnlockIcon({ iconName = "wifi-unlock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}