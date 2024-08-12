import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cloudAngledZapIcon({ iconName = "cloud-angled-zap", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}