import React from 'react'
import { Icon, IconProps } from '../Icon'

export function idIcon({ iconName = "id", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}