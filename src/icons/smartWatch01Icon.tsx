import React from 'react'
import { Icon, IconProps } from '../Icon'

export function smartWatch01Icon({ iconName = "smart-watch01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}