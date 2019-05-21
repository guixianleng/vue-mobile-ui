export default [
  {
    path: '/toast',
    name: 'Toast',
    component: () => import('views/examples/Toast.vue'),
    meta: {
      title: 'Toast轻提示',
      icon: 'toast',
      link: '/'
    }
  }
]
