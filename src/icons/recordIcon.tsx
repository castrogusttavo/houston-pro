import React from 'react'
import { Icon, IconProps } from '../Icon'

export function recordIcon({ iconName = "record", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}