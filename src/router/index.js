import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ContactView from "@/views/ContactView.vue";

import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import ErrorView from "@/views/ErrorView.vue";
import UsersView from "@/views/UsersView.vue";
import PlayersView from "@/views/PlayersView.vue";
import TeamView from "@/views/TeamView.vue";
import ClubsView from "@/views/ClubsView.vue";
import ObservationsView from "@/views/ObservationsView.vue";
import GamesView from "@/views/GamesView.vue";


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
    {
        path: '/error',
        name: 'errorRoute',
        component: ErrorView
    },
    {
        path: '/users',
        name: 'usersRoute',
        component: UsersView
    },
    {
        path: '/clubs',
        name: 'clubsRoute',
        component: ClubsView
    },
    {
        path: '/players',
        name: 'playersRoute',
        component: PlayersView
    },
    {
        path: '/observations',
        name: 'observationsRoute',
        component: ObservationsView
    },
    {
        path: '/games',
        name: 'gamesRoute',
        component: GamesView
    },
    {
        path: '/team',
        name: 'teamRoute',
        component: TeamView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
