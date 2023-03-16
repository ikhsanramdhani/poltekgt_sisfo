<template>
    <div class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
            </svg>
            <img src="../assets/school.png" alt="" width="80px" height="90px" class="mx-2">
            <h3 class="text-white" :disabled="isdisabled">SISFO PGT</h3>

            <hr class="hr">
        </a>
        <hr class="">
        <ul class="nav nav-pills flex-column mb-auto ">
            <p class="text-light">Papan Informasi</p>
            <li class="nav-item">
                <router-link to="/" class="nav-link text-white" aria-current="page">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#home"></use>
                    </svg>
                    IPK
                </router-link>
            </li>
            <li>
                <router-link to="/poin" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#speedometer2"></use>
                    </svg>
                    Poin/Kondite
                </router-link>
            </li>
            <hr>
            <p>Presensi</p>
            <li>
                <router-link to="/add" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#speedometer2"></use>
                    </svg>
                    Dosen
                </router-link>
            </li>
            <hr>
            <p>Profil</p>
            <li class="nav-item">
                <router-link to="/prof" class="nav-link text-white" aria-current="page">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#home"></use>
                    </svg>
                    Profil
                </router-link>
            </li>
            <li>
                <router-link to="/UbahPw" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#speedometer2"></use>
                    </svg>
                    Ubah Password
                </router-link>
            </li>
            <hr>
            <li>
                <router-link to="/add" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#speedometer2"></use>
                    </svg>
                    Keluar
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: "sideCmp",

    data() {
        return {
            isdisabled: true
        }
    }

}
</script>

<style>
.sidebar {
    background-color: #4E73DF;
    width: 250px;
    min-height: 100vh;
}

hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: .25;
}

ul li {
    background-color: #4E73DF;
}

ul li :hover {
    background-color: #3fa2df;
}

.logout:hover {
    background-color: #3fa2df;
    border-radius: 0.3rem;
}
</style>