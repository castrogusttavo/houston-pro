import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlphabetThaiIcon({ iconName = "alphabet-thai", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}