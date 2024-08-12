import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pinterestIcon({ iconName = "pinterest", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}