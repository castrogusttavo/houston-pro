import React from 'react'
import { Icon, IconProps } from '../Icon'

export function incognitoIcon({ iconName = "incognito", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}