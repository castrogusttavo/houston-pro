import React from 'react'
import { Icon, IconProps } from '../Icon'

export function reflexIcon({ iconName = "reflex", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}