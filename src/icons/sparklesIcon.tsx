import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sparklesIcon({ iconName = "sparkles", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}