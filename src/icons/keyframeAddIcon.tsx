import React from 'react'
import { Icon, IconProps } from '../Icon'

export function keyframeAddIcon({ iconName = "keyframe-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}