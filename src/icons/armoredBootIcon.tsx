import React from 'react'
import { Icon, IconProps } from '../Icon'

export function armoredBootIcon({ iconName = "armored-boot", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}