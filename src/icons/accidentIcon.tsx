import React from 'react'
import { Icon, IconProps } from '../Icon'

export function accidentIcon({ iconName = "accident", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}