import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bowlingIcon({ iconName = "bowling", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}