import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cameraVideoIcon({ iconName = "camera-video", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}