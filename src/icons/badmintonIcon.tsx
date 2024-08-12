import React from 'react'
import { Icon, IconProps } from '../Icon'

export function badmintonIcon({ iconName = "badminton", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}