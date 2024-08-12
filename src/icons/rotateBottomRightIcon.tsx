import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rotateBottomRightIcon({ iconName = "rotate-bottom-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}