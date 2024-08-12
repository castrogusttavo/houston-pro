import React from 'react'
import { Icon, IconProps } from '../Icon'

export function screenRotationIcon({ iconName = "screen-rotation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}