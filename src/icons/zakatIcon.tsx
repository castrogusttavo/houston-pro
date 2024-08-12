import React from 'react'
import { Icon, IconProps } from '../Icon'

export function zakatIcon({ iconName = "zakat", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}