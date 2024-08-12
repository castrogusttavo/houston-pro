import React from 'react'
import { Icon, IconProps } from '../Icon'

export function xingIcon({ iconName = "xing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}