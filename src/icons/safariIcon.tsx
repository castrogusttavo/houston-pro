import React from 'react'
import { Icon, IconProps } from '../Icon'

export function safariIcon({ iconName = "safari", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}