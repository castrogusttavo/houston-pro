import React from 'react'
import { Icon, IconProps } from '../Icon'

export function spaceshipIcon({ iconName = "spaceship", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}