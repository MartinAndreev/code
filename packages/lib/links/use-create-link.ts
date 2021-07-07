import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import CREATE_LINK from '@acter/schema/mutations/link-create.graphql'
import GET_LINKS from '@acter/schema/queries/links-by-acter.graphql'
import { Acter, User, Link as LinkType } from '@acter/schema/types'

export type LinkVariables = LinkType & {
  acterId: string
  userId: string
}

type CreateLinkData = {
  createLink: LinkType
}

interface CreateLinkOptions
  extends UseMutationOptions<CreateLinkData, LinkVariables> {
  onCompleted: (CreateLinkData) => LinkType[] | void
}

export type HandleMethod<TData> = (link: LinkType | TData) => Promise<void>

/**
 * Custom hook that creates a new link
 * @param acter new link belongs to
 * @param user that creates the new link
 * @param displayLinks - current list of links that belong this the acter
 * @param options - mutation options e.g. data or variables
 * @returns updated list of links with new link
 */

export const useCreateLink = (
  acter: Acter,
  user: User,
  displayLinks: LinkType[],
  options?: CreateLinkOptions
): [HandleMethod<CreateLinkData>, MutationResult] => {
  const [createLink, mutationResult] = useNotificationMutation<
    CreateLinkData,
    LinkVariables
  >(CREATE_LINK, {
    ...options,
    update: (cache, result) => {
      typeof options?.update === 'function' && options.update(cache, result)
      const {
        data: { createLink: newLink },
      } = result

      const newDisplayLinks = [...displayLinks, newLink]

      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
    onCompleted: (result) => {
      const { createLink: newLink } = result

      const newDisplayLinks = [...displayLinks, newLink]

      typeof options?.onCompleted === 'function' &&
        options.onCompleted(newDisplayLinks)

      return newDisplayLinks
    },
    getSuccessMessage: () => 'Link created',
  })

  const handleLink = async (values: LinkVariables) => {
    createLink({
      variables: {
        ...values,
        acterId: acter.id,
        userId: user.id,
      },
    })
  }
  return [handleLink, mutationResult]
}
