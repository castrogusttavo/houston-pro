import React from 'react'
import { Icon, IconProps } from '../Icon'

export function berlinTowerIcon({ iconName = "berlin-tower", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}