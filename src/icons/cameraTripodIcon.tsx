import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cameraTripodIcon({ iconName = "camera-tripod", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}