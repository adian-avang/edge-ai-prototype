export const functions: any[] = [
  {
    name: 'create_event_in_calendar',
    description: 'Create an event in Noswork Calendar',
    parameters: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
  // {
  //   name: 'get_story',
  //   description:
  //     'Get a story from Hacker News. Also returns the Hacker News URL to the story.',
  //   parameters: {
  //     type: 'object',
  //     properties: {
  //       id: {
  //         type: 'number',
  //         description: 'The ID of the story',
  //       },
  //     },
  //     required: ['id'],
  //   },
  // },
  // {
  //   name: 'get_story_with_comments',
  //   description:
  //     'Get a story from Hacker News with comments.  Also returns the Hacker News URL to the story and each comment.',
  //   parameters: {
  //     type: 'object',
  //     properties: {
  //       id: {
  //         type: 'number',
  //         description: 'The ID of the story',
  //       },
  //     },
  //     required: ['id'],
  //   },
  // },
  // {
  //   name: 'summarize_top_story',
  //   description:
  //     'Summarize the top story from Hacker News, including both the story and its comments. Also returns the Hacker News URL to the story and each comment.',
  //   parameters: {
  //     type: 'object',
  //     properties: {},
  //     required: [],
  //   },
  // },
]

// async function get_top_stories(limit: number = 10) {
//   console.log('getting top stories')
//   const response = await fetch(
//     // "https://hacker-news.firebaseio.com/v0/topstories.json",
//     'https://rickandmortyapi.com/api/episode/28'
//   )
//   const ids = await response.json()
//   // const stories = await Promise.all(
//   //   ids.slice(0, limit).map((id: number) => get_story(id)),
//   // );
//   return {
//     ...ids,
//     hnUrl: `https://rickandmortyapi.com/api/episode/28`,
//   }
// }

async function create_event_in_calendar() {
  const calendarUrl =
    'https://workspaces.avangenio.com/apps/calendar/dayGridMonth/now'
  const url = 'https://rickandmortyapi.com/api/episode/28'
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({}),
  }

  const response = await fetch(url, options)

  const ids = await response.json()
  return {
    ...ids,
    hnUrl: calendarUrl,
  }
}
// async function get_story(id: number) {
//   console.log('getting story', id)
//   const response = await fetch(
//     `https://hacker-news.firebaseio.com/v0/item/${id}.json`
//   )
//   const data = await response.json()
//   return {
//     ...data,
//     hnUrl: `https://news.ycombinator.com/item?id=${id}`,
//   }
// }

// async function get_story_with_comments(id: number) {
//   console.log('getting story with comments', id)
//   const response = await fetch(
//     `https://hacker-news.firebaseio.com/v0/item/${id}.json`
//   )
//   const data = await response.json()
//   const comments = await Promise.all(
//     data.kids.slice(0, 10).map((id: number) => get_story(id))
//   )
//   return {
//     ...data,
//     hnUrl: `https://news.ycombinator.com/item?id=${id}`,
//     comments: comments.map((comment: any) => ({
//       ...comment,
//       hnUrl: `https://news.ycombinator.com/item?id=${comment.id}`,
//     })),
//   }
// }

// async function summarize_top_story() {
//   console.log('summarizing top story')
//   const topStory = await get_top_stories(1)
//   return await get_story_with_comments(topStory[0].id)
// }

export async function runFunction(name: string, args: any) {
  switch (name) {
    case 'create_event_in_calendar':
      return await create_event_in_calendar()
    // case 'get_story':
    //   return await get_story(args['id'])
    // case 'get_story_with_comments':
    //   return await get_story_with_comments(args['id'])
    // case 'summarize_top_story':
    //   return await summarize_top_story()
    default:
      return null
  }
}
