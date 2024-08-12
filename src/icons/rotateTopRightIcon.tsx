import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rotateTopRightIcon({ iconName = "rotate-top-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}