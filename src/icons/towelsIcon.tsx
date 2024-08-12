import React from 'react'
import { Icon, IconProps } from '../Icon'

export function towelsIcon({ iconName = "towels", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}