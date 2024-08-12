import React from 'react'
import { Icon, IconProps } from '../Icon'

export function voiceIcon({ iconName = "voice", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}