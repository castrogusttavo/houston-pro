import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cinnamonRollIcon({ iconName = "cinnamon-roll", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}