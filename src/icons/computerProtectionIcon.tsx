import React from 'react'
import { Icon, IconProps } from '../Icon'

export function computerProtectionIcon({ iconName = "computer-protection", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}