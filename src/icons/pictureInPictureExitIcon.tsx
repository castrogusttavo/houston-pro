import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pictureInPictureExitIcon({ iconName = "picture-in-picture-exit", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}