import React from 'react'
import { Icon, IconProps } from '../Icon'

export function baseballHelmetIcon({ iconName = "baseball-helmet", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}