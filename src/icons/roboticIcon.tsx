import React from 'react'
import { Icon, IconProps } from '../Icon'

export function roboticIcon({ iconName = "robotic", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}