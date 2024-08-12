import React from 'react'
import { Icon, IconProps } from '../Icon'

export function blurIcon({ iconName = "blur", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}