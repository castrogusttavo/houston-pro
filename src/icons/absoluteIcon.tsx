import React from 'react'
import { Icon, IconProps } from '../Icon'

export function absoluteIcon({ iconName = "absolute", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}