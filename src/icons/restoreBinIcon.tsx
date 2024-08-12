import React from 'react'
import { Icon, IconProps } from '../Icon'

export function restoreBinIcon({ iconName = "restore-bin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}