import React from 'react'
import { Icon, IconProps } from '../Icon'

export function school01Icon({ iconName = "school01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}