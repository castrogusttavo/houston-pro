import React from 'react'
import { Icon, IconProps } from '../Icon'

export function keyframeIcon({ iconName = "keyframe", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}