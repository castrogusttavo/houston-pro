import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SeatSelectorIcon({ iconName = 'seat-selector-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
