import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textAlignRightIcon({ iconName = "text-align-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}