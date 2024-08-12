import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Hold03Icon({ iconName = 'hold03', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
