import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowLeftRightIcon({ iconName = "arrow-left-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}