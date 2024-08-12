import React from 'react'
import { Icon, IconProps } from '../Icon'

export function aiLockIcon({ iconName = "ai-lock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}