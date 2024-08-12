import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sharedWifiIcon({ iconName = "shared-wifi", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}