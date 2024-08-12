import React from 'react'
import { Icon, IconProps } from '../Icon'

export function aiComputerIcon({ iconName = "ai-computer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}