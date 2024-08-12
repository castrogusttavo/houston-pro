import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textVerticalAlignmentIcon({ iconName = "text-vertical-alignment", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}