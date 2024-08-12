import React from 'react'
import { Icon, IconProps } from '../Icon'

export function constellationIcon({ iconName = "constellation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}