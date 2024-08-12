import React from 'react'
import { Icon, IconProps } from '../Icon'

export function clipboardIcon({ iconName = "clipboard", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}