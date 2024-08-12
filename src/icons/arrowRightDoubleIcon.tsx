import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowRightDoubleIcon({ iconName = "arrow-right-double", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}