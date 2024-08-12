import React from 'react'
import { Icon, IconProps } from '../Icon'

export function calculatorIcon({ iconName = "calculator", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}