import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rotateSquareIcon({ iconName = "rotate-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}