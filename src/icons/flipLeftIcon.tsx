import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flipLeftIcon({ iconName = "flip-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}