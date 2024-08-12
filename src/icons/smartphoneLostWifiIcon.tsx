import React from 'react'
import { Icon, IconProps } from '../Icon'

export function smartphoneLostWifiIcon({ iconName = "smartphone-lost-wifi", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}