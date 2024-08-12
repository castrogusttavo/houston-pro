import React from 'react'
import { Icon, IconProps } from '../Icon'

export function speakerIcon({ iconName = "speaker", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}