import React from 'react'
import { Icon, IconProps } from '../Icon'

export function twitchIcon({ iconName = "twitch", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}