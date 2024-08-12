import React from 'react'
import { Icon, IconProps } from '../Icon'

export function smartPhone01Icon({ iconName = "smart-phone01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}