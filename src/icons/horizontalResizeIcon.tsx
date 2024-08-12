import React from 'react'
import { Icon, IconProps } from '../Icon'

export function horizontalResizeIcon({ iconName = "horizontal-resize", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}