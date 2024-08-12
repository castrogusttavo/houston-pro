import React from 'react'
import { Icon, IconProps } from '../Icon'

export function verticalResizeIcon({ iconName = "vertical-resize", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}