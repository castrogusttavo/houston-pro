import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tag01Icon({ iconName = "tag01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}