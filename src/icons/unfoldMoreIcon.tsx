import React from 'react'
import { Icon, IconProps } from '../Icon'

export function unfoldMoreIcon({ iconName = "unfold-more", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}