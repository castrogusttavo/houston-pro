import React from 'react'
import { Icon, IconProps } from '../Icon'

export function minusPlus01Icon({ iconName = "minus-plus01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}