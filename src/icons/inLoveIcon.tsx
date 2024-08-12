import React from 'react'
import { Icon, IconProps } from '../Icon'

export function inLoveIcon({ iconName = "in-love", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}