import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cricketHelmetIcon({ iconName = "cricket-helmet", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}