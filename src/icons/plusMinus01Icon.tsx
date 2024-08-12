import React from 'react'
import { Icon, IconProps } from '../Icon'

export function plusMinus01Icon({ iconName = "plus-minus01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}