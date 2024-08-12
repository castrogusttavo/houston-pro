import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowLeftDoubleIcon({ iconName = "arrow-left-double", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}