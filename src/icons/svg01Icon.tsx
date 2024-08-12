import React from 'react'
import { Icon, IconProps } from '../Icon'

export function svg01Icon({ iconName = "svg01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}