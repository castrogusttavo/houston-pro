import React from 'react'
import { Icon, IconProps } from '../Icon'

export function keyframeTopIcon({ iconName = "keyframe-top", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}