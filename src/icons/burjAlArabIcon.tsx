import React from 'react'
import { Icon, IconProps } from '../Icon'

export function burjAlArabIcon({ iconName = "burj-al-arab", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}