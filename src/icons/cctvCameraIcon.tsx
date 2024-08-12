import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cctvCameraIcon({ iconName = "cctv-camera", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}