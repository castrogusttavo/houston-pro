import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textIndentMoreIcon({ iconName = "text-indent-more", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}