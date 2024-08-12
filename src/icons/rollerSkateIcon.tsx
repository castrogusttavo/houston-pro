import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rollerSkateIcon({ iconName = "roller-skate", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}