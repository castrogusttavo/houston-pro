import React from 'react'
import { Icon, IconProps } from '../Icon'

export function voiceIdIcon({ iconName = "voice-id", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}