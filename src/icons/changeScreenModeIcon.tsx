import React from 'react'
import { Icon, IconProps } from '../Icon'

export function changeScreenModeIcon({ iconName = "change-screen-mode", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}