<template>
    <div>
        <div class="pw">
            <sideCmp />
            <div class="lpw">
                <navbarCMP />
                <IpkCmp />
            </div>

        </div>
    </div>
</template>

<script>

import sideCmp from "../components/side.vue"
import navbarCMP from "../components/nav.vue"
import IpkCmp from "../components/ipk.vue"


export default {
    name: "ipkPages",
    components: {

        sideCmp,
        navbarCMP,
        IpkCmp

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