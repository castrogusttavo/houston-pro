import React from 'react'
import { Icon, IconProps } from '../Icon'

export function squareRootSquareIcon({ iconName = "square-root-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}