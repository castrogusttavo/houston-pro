import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pyramidMaslowoIcon({ iconName = "pyramid-maslowo", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}