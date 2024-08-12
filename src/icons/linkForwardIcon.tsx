import React from 'react'
import { Icon, IconProps } from '../Icon'

export function linkForwardIcon({ iconName = "link-forward", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}