import React from 'react'
import { Icon, IconProps } from '../Icon'

export function naturalFoodIcon({ iconName = "natural-food", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}