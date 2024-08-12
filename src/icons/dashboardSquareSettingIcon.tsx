import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dashboardSquareSettingIcon({ iconName = "dashboard-square-setting", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}