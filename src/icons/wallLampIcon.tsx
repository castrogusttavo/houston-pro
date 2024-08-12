import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wallLampIcon({ iconName = "wall-lamp", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}