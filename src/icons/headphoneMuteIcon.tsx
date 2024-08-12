import React from 'react'
import { Icon, IconProps } from '../Icon'

export function headphoneMuteIcon({ iconName = "headphone-mute", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}