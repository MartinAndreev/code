import React, { FC, useState } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { FollowersAvatars } from 'src/components/acter/followers-avatars'
import { Modal } from 'src/components/util/modal'
import { Acter, User } from '@schema'
import { MembersSection as Members } from 'src/components/acter/landing-page/members-section'
import { ConnectionStateProps } from 'src/components/acter/landing-page/members-section/connection-state'

export type MembersSectionProps = {
  acter: Acter
  user: User
  onConnectionStateChange: ConnectionStateProps['onSubmit']
}

export const MembersSection: FC<MembersSectionProps> = ({
  acter,
  user,
  onConnectionStateChange,
}) => {
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => setOpenModal(true)

  const handleModalClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Typography variant="h6" className={classes.name}>
        Members
      </Typography>
      <Box onClick={handleClick}>
        <FollowersAvatars acter={acter} />
      </Box>

      {openModal && (
        <Modal
          heading="Members"
          open={openModal}
          handleModalClose={handleModalClose}
        >
          <Box className={classes.members}>
            <Members
              acter={acter}
              user={user}
              onConnectionStateChange={onConnectionStateChange}
            />
          </Box>
        </Modal>
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    name: {
      marginBottom: theme.spacing(1.5),
    },
    members: {
      width: theme.spacing(80),
      padding: theme.spacing(3),
    },
  })
)
