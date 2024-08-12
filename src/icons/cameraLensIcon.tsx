import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cameraLensIcon({ iconName = "camera-lens", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}