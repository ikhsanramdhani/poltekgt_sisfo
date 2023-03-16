<template>
    <div class="po">
        <sideCmp />
        <div class="lpo">
            <navbarCMP />
            <cardCmp class="crd" />
            <tblCmp class="bl" />
        </div>
    </div>
</template>

<script>

import sideCmp from "../components/side.vue"
import navbarCMP from "../components/nav.vue"
import cardCmp from "../components/card.vue"
import tblCmp from "../components/tableKon.vue"

export default {
    name: "PagePoin",
    components: {


        sideCmp,
        navbarCMP,
        cardCmp,
        tblCmp

        // formCMP

    },

}
</script>

<style scoped>
.po {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
}

.crd {
    width: 80%;

}

.lpo {
    /* margin-left: 5%; */
    display: flex;
    flex-direction: column;
    width: 100%;
}

.bl {
    padding: 2%;
}

/* .fmp {
    margin: 5%;
} */
</style>
