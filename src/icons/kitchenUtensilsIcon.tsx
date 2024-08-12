import React from 'react'
import { Icon, IconProps } from '../Icon'

export function kitchenUtensilsIcon({ iconName = "kitchen-utensils", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}