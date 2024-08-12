import React from 'react'
import { Icon, IconProps } from '../Icon'

export function volumeMinusIcon({ iconName = "volume-minus", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}