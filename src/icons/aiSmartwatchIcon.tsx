import React from 'react'
import { Icon, IconProps } from '../Icon'

export function aiSmartwatchIcon({ iconName = "ai-smartwatch", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}