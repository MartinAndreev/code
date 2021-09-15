import React, { FC } from 'react'

import { useRouter } from 'next/router'

import {
  SettingsContainer,
  SettingsContent,
  SettingsMenu,
  SettingsLinkMenuItem,
} from '@acter/components/util/settings-layout'
import { ProfileSettingsPages } from '@acter/lib/constants'

export const ProfileFormLayout: FC = ({ children }) => {
  const router = useRouter()
  // Get the value after the last /
  const route = router.pathname.match(/\/([^/]*)$/)
  const selectedPage = route?.length ? route[1] : route
  return (
    <SettingsContainer>
      <SettingsMenu>
        {Object.keys(ProfileSettingsPages).map((key) => {
          const page = ProfileSettingsPages[key]
          return (
            <SettingsLinkMenuItem
              key={`profile-settings-${page}`}
              href={`/profile/${page}`}
              isActive={selectedPage === page}
            >
              {page}
            </SettingsLinkMenuItem>
          )
        })}
      </SettingsMenu>
      <SettingsContent>{children}</SettingsContent>
    </SettingsContainer>
  )
}
