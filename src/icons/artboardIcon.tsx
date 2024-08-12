import React from 'react'
import { Icon, IconProps } from '../Icon'

export function artboardIcon({ iconName = "artboard", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}