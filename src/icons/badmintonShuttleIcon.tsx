import React from 'react'
import { Icon, IconProps } from '../Icon'

export function badmintonShuttleIcon({ iconName = "badminton-shuttle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}