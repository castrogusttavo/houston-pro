import React from 'react'
import { Icon, IconProps } from '../Icon'

export function aiViewIcon({ iconName = "ai-view", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}