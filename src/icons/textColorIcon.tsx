import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textColorIcon({ iconName = "text-color", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}