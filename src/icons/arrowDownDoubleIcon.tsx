import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowDownDoubleIcon({ iconName = "arrow-down-double", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}