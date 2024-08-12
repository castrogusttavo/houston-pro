import React from 'react'
import { Icon, IconProps } from '../Icon'

export function meetingRoomIcon({ iconName = "meeting-room", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}