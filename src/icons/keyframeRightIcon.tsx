import React from 'react'
import { Icon, IconProps } from '../Icon'

export function keyframeRightIcon({ iconName = "keyframe-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}