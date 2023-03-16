<template>
    <div>
        <div class="pw">
            <sideCmp />
            <div class="lpw">
                <navbarCMP />
                <formCMP class="fm" />
            </div>

        </div>
    </div>
</template>

<script>

import sideCmp from "../components/side.vue"
import navbarCMP from "../components/nav.vue"
import formCMP from "../components/form.vue"


export default {
    name: "UbahPW",
    components: {

        sideCmp,
        navbarCMP,
        formCMP

    },

}
</script>

<style scoped>
.pw {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    /* flex-direction: row; */
}

.lpw {
    /* margin-left: 5%; */
    display: flex;
    flex-direction: column;
    width: 100%;
}

.fm {
    margin: 5%;
}
</style>