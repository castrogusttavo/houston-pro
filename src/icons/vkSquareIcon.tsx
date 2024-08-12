import React from 'react'
import { Icon, IconProps } from '../Icon'

export function vkSquareIcon({ iconName = "vk-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}