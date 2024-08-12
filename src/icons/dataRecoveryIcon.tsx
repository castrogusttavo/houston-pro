import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dataRecoveryIcon({ iconName = "data-recovery", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}