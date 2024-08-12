import React from 'react'
import { Icon, IconProps } from '../Icon'

export function internetIcon({ iconName = "internet", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}