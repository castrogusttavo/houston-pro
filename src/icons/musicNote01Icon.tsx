import React from 'react'
import { Icon, IconProps } from '../Icon'

export function musicNote01Icon({ iconName = "music-note01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}