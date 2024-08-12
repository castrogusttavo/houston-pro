import React from 'react'
import { Icon, IconProps } from '../Icon'

export function nintendoSwitchIcon({ iconName = "nintendo-switch", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}