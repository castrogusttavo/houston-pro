import React from 'react'
import { Icon, IconProps } from '../Icon'

export function heartbreakIcon({ iconName = "heartbreak", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}