import React from 'react'
import { Icon, IconProps } from '../Icon'

export function workUpdateIcon({ iconName = "work-update", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}