import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flipRightIcon({ iconName = "flip-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}