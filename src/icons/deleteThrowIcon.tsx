import React from 'react'
import { Icon, IconProps } from '../Icon'

export function deleteThrowIcon({ iconName = "delete-throw", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}