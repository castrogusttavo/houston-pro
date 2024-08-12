import React from 'react'
import { Icon, IconProps } from '../Icon'

export function baseballBatIcon({ iconName = "baseball-bat", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}