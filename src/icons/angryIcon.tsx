import React from 'react'
import { Icon, IconProps } from '../Icon'

export function angryIcon({ iconName = "angry", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}