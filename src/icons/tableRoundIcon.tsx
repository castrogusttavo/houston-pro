import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tableRoundIcon({ iconName = "table-round", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}