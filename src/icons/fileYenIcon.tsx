import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileYenIcon({ iconName = "file-yen", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}