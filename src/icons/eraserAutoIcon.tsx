import React from 'react'
import { Icon, IconProps } from '../Icon'

export function eraserAutoIcon({ iconName = "eraser-auto", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}