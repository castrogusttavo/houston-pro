import React from 'react'
import { Icon, IconProps } from '../Icon'

export function laptopVideoIcon({ iconName = "laptop-video", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}