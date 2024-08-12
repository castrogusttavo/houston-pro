import React from 'react'
import { Icon, IconProps } from '../Icon'

export function computerVideoIcon({ iconName = "computer-video", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}