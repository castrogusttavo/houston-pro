import React from 'react'
import { Icon, IconProps } from '../Icon'

export function burningCdIcon({ iconName = "burning-cd", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}