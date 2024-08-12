import React from 'react'
import { Icon, IconProps } from '../Icon'

export function adobePremierIcon({ iconName = "adobe-premier", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}