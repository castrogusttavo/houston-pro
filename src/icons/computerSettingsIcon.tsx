import React from 'react'
import { Icon, IconProps } from '../Icon'

export function computerSettingsIcon({ iconName = "computer-settings", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}