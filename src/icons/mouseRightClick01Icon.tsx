import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouseRightClick01Icon({ iconName = "mouse-right-click01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}