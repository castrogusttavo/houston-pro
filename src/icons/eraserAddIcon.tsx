import React from 'react'
import { Icon, IconProps } from '../Icon'

export function eraserAddIcon({ iconName = "eraser-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}