import React from 'react'
import { Icon, IconProps } from '../Icon'

export function payoneerIcon({ iconName = "payoneer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}