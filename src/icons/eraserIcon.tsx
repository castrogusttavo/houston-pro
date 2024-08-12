import React from 'react'
import { Icon, IconProps } from '../Icon'

export function eraserIcon({ iconName = "eraser", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}