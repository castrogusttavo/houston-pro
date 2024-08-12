import React from 'react'
import { Icon, IconProps } from '../Icon'

export function playStoreIcon({ iconName = "play-store", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}