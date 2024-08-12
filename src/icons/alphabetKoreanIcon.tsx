import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alphabetKoreanIcon({ iconName = "alphabet-korean", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}