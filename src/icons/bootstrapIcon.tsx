import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bootstrapIcon({ iconName = "bootstrap", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}