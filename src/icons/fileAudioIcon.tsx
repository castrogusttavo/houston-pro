import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileAudioIcon({ iconName = "file-audio", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}