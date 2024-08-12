import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MouseLeftClick01Icon({ iconName = "mouse-left-click01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}