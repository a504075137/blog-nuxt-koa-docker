const state = () => ({
  navList: [
    {
      name: '个人文章',
      path: '/article',
      type: 'router'
    },
    {
      name: '好玩的小东西',
      path: '/game',
      type: 'router'

    },
    {
      name: '语雀',
      path: 'https://www.yuque.com/u2025518',
      type: 'link'

    },
    {
      name: 'Github',
      path: 'https://github.com/luotianchun',
      type: 'link'

    }
  ],
})

export default state
