import React from 'react'
import { Icon, IconProps } from '../Icon'

export function olympicTorchIcon({ iconName = "olympic-torch", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}