import React from 'react'
import { Icon, IconProps } from '../Icon'

export function translationIcon({ iconName = "translation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}