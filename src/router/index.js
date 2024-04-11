import { createRouter, createWebHashHistory } from 'vue-router'

import list from "@/views/list.vue"
import write from "@/views/write.vue"
import view from "@/views/view.vue"
import modify from "@/views/modify.vue"

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
  },
  {
    path: "/modify/:id",
    component: modify
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
