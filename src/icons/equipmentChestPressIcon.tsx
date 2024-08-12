import React from 'react'
import { Icon, IconProps } from '../Icon'

export function equipmentChestPressIcon({ iconName = "equipment-chest-press", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}