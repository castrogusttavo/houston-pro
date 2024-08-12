import React from 'react'
import { Icon, IconProps } from '../Icon'

export function beaterIcon({ iconName = "beater", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}