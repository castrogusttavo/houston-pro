import React from 'react'
import { Icon, IconProps } from '../Icon'

export function airplaneModeOffIcon({ iconName = "airplane-mode-off", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}