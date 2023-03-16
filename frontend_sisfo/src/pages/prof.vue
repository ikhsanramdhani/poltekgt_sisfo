<template>
    <div>
        <div class="pw">
            <sideCmp />
            <div class="lpw">
                <navbarCMP />
                <profCmp class="prf" />
            </div>

        </div>
    </div>
</template>

<script>

import sideCmp from "../components/side.vue"
import navbarCMP from "../components/nav.vue"
import profCmp from "../components/card-pro.vue"


export default {
    name: "profPg",
    components: {

        sideCmp,
        navbarCMP,
        profCmp

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

.prf {
    padding: 5%;
}

.fm {
    margin: 5%;
}
</style>