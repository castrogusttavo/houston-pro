import React from 'react'
import { Icon, IconProps } from '../Icon'

export function angryBirdIcon({ iconName = "angry-bird", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}