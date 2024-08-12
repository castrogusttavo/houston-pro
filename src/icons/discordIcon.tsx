import React from 'react'
import { Icon, IconProps } from '../Icon'

export function discordIcon({ iconName = "discord", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}