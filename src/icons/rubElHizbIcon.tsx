import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rubElHizbIcon({ iconName = "rub-el-hizb", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}