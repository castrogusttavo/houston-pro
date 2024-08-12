import React from 'react'
import { Icon, IconProps } from '../Icon'

export function presentationPodiumIcon({ iconName = "presentation-podium", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}