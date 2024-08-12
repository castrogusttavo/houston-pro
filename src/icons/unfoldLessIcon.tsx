import React from 'react'
import { Icon, IconProps } from '../Icon'

export function unfoldLessIcon({ iconName = "unfold-less", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}