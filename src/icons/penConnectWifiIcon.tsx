import React from 'react'
import { Icon, IconProps } from '../Icon'

export function penConnectWifiIcon({ iconName = "pen-connect-wifi", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}