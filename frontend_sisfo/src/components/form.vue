<template>
    <form>
        <!-- <div class="nv">
            <nav class="navbar navbar-light bg-light justify-content-between">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div> -->
        <div>
            <h2 class="text-secondary">UBAH PASSWORD</h2>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password Lama</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="*******">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password Baru</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Masukan password baru">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Konfirmasi Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"
                placeholder="Masukan konfirmasi password baru">
        </div>
        <button type="submit" class="btn btn-primary">UBAH</button>
    </form>
</template>

<script>
export default {
    name: "formCMP"

}
</script>

<style scoped>
.nv {
    margin-bottom: 100px;
}
</style>