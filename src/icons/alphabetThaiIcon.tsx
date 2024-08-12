import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alphabetThaiIcon({ iconName = "alphabet-thai", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}