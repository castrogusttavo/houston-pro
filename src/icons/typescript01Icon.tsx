import React from 'react'
import { Icon, IconProps } from '../Icon'

export function typescript01Icon({ iconName = "typescript01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}