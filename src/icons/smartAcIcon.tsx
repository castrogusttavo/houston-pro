import React from 'react'
import { Icon, IconProps } from '../Icon'

export function smartAcIcon({ iconName = "smart-ac", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}