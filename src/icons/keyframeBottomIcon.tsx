import React from 'react'
import { Icon, IconProps } from '../Icon'

export function keyframeBottomIcon({ iconName = "keyframe-bottom", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}