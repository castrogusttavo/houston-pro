import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alphabetArabicIcon({ iconName = "alphabet-arabic", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}