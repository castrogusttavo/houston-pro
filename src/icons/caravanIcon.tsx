import React from 'react'
import { Icon, IconProps } from '../Icon'

export function caravanIcon({ iconName = "caravan", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}