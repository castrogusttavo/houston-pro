import React from 'react'
import { Icon, IconProps } from '../Icon'

export function medicineSyrupIcon({ iconName = "medicine-syrup", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}