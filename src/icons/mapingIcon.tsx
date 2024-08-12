import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mapingIcon({ iconName = "maping", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}