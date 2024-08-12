import React from 'react'
import { Icon, IconProps } from '../Icon'

export function soundcloudIcon({ iconName = "soundcloud", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}