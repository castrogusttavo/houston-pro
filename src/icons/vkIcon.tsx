import React from 'react'
import { Icon, IconProps } from '../Icon'

export function vkIcon({ iconName = "vk", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}