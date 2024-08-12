import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chefHatIcon({ iconName = "chef-hat", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}