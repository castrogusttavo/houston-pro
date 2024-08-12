import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textAlignLeftIcon({ iconName = "text-align-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}