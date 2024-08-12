import React from 'react'
import { Icon, IconProps } from '../Icon'

export function linkBackwardIcon({ iconName = "link-backward", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}