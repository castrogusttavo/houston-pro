import React from 'react'
import { Icon, IconProps } from '../Icon'

export function touch09Icon({ iconName = "touch09", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}