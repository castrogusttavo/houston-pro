import React from 'react'
import { Icon, IconProps } from '../Icon'

export function truckMonsterIcon({ iconName = "truck-monster", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}