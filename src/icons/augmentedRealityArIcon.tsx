import React from 'react'
import { Icon, IconProps } from '../Icon'

export function augmentedRealityArIcon({ iconName = "augmented-reality-ar", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}