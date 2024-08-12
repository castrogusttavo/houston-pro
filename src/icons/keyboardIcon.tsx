import React from 'react'
import { Icon, IconProps } from '../Icon'

export function keyboardIcon({ iconName = "keyboard", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}