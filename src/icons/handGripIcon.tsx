import React from 'react'
import { Icon, IconProps } from '../Icon'

export function handGripIcon({ iconName = "hand-grip", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}