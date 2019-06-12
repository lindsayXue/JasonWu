import VueRouter from 'vue-router'

import Home from '../components/Home'
import Research from '../components/Research'
import Publications from '../components/Publications'
import Blog from '../components/blog/Blog'
import BlogHome from '../components/blog/BlogHome'
import BlogView from '../components/blog/BlogView'
import CreateBlog from '../components/blog/CreateBlog'

import Contact from '../components/Contact'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/research',
      name: 'research',
      component: Research
    },
    {
      path: '/publications',
      name: 'publications',
      component: Publications
    },
    {
      path: '/blog',
      component: Blog,
      children: [
        {
          path: '/blog',
          name: 'blog-home',
          component: BlogHome
        },
        {
          path: '/blog/add',
          name: 'create-blog',
          component: CreateBlog
        },
        {
          path: '/blog/:id',
          name: 'blog-view',
          component: BlogView
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
  mode: 'history'
})

export default router
