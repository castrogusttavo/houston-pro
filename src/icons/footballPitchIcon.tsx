import React from 'react'
import { Icon, IconProps } from '../Icon'

export function footballPitchIcon({ iconName = "football-pitch", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}