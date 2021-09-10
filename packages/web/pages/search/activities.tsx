import React from 'react'
import { NextPage } from 'next'
import { Head } from '@acter/components/layout/head'
import { Layout } from '@acter/components/layout'
import { Search } from '@acter/components/search'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { getUserProfile, getInterests, getActivityTypes } from 'props'
import { ActivityType, InterestType, User } from '@acter/schema'
import { SearchType } from '@acter/lib/constants'

interface SearchPageProps {
  activityTypes: ActivityType[]
  interestTypes: InterestType[]
  user?: User
}

const SearchActivitiesPage: NextPage<SearchPageProps> = ({
  activityTypes,
  interestTypes,
  user,
}) => {
  return (
    <Layout
      user={user}
      searchType={SearchType.ACTIVITIES}
      acterTypes={activityTypes}
    >
      <Head title="Acter" />

      <main>
        <Search
          searchType={SearchType.ACTIVITIES}
          interestTypes={interestTypes}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(false), getActivityTypes, getInterests)

export default SearchActivitiesPage
