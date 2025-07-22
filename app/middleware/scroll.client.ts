export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path !== from.path && import.meta.client) {
        useNuxtApp().hook("page:finish", () => {
            if (history.state.scroll) {
                setTimeout(() => {
                    window.scrollTo(history.state.scroll)
                }, 0)
            } else {
                setTimeout(() => window.scrollTo(0, 0), 0);
            }
        })

    }
})