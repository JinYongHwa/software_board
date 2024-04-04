import { createRouter, createWebHashHistory } from 'vue-router'

import list from "@/views/list.vue"
import write from "@/views/write.vue"
import view from "@/views/view.vue"

const routes = [
  {
    path: "/",
    component: list
  },
  {
    path: "/write",
    component: write
  },
  {
    path: "/view/:id",
    component: view
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
