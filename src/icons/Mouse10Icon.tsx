import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Mouse10Icon({ iconName = "mouse10", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}