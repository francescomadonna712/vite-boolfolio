<script>

export default {
    name: 'AppHeader',

    data() {
        return {
            menuItems: [
                { label: 'Home', routeName: 'home' },
                { label: 'Boolfolio', routeName: 'Boolfolio' },
                { label: 'About', routeName: 'About' },
            ],
        }
    },



};



</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <nav>
                    <ul>
                        <li v-for="(item, index) in menuItems" :key="index">
                            <router-link :to="{ name: item.routeName }" class="nav-link">
                                {{ item.label }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </div>


</template>

<style scoped>
li {
    list-style: none;
}
</style>