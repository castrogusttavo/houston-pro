import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rankingIcon({ iconName = "ranking", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}