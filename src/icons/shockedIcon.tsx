import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shockedIcon({ iconName = "shocked", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}