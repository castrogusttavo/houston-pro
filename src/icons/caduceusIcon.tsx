import React from 'react'
import { Icon, IconProps } from '../Icon'

export function caduceusIcon({ iconName = "caduceus", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}