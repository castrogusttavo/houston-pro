import React from 'react'
import { Icon, IconProps } from '../Icon'

export function productLoadingIcon({ iconName = "product-loading", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}