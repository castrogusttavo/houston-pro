import React from 'react'
import { Icon, IconProps } from '../Icon'

export function smartphoneWifiIcon({ iconName = "smartphone-wifi", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}