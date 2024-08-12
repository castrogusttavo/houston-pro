import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shellfishIcon({ iconName = "shellfish", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}