import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chairBarberIcon({ iconName = "chair-barber", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}