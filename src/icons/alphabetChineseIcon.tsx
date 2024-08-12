import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alphabetChineseIcon({ iconName = "alphabet-chinese", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}