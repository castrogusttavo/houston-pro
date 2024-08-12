import React from 'react'
import { Icon, IconProps } from '../Icon'

export function repeatIcon({ iconName = "repeat", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}