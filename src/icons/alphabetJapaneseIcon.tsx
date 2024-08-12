import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alphabetJapaneseIcon({ iconName = "alphabet-japanese", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}