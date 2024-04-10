import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ContactView from "@/views/ContactView.vue";

import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";


const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },
    {
        path: '/about',
        name: 'aboutRoute',
        component: AboutView
    },
    {
        path: '/contact',
        name: 'contactRoute',
        component: ContactView
    },
    {
        path: '/login',
        name: 'loginRoute',
        component: LoginView
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
