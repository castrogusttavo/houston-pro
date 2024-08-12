import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flipTopIcon({ iconName = "flip-top", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}