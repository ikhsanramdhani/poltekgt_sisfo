<template>
    <div>
        <h2 class="text-center">Data Nilai Mahasiswa</h2>
        <table class="table table-striped text-center">
            <thead>
                <tr>
                <th scope="col">NIM</th>
                <th scope="col">Nama</th>
                <th scope="col">UTS</th>
                <th scope="col">UAS</th>
                <th scope="col">Tugas</th>
                <th scope="col">Kuis</th>
                <th scope="col">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1102001</th>
                <td>ACHMAD FIRDAUS</td>
                <td>80</td>
                <td>80</td>
                <td>80</td>
                <td>80</td>
                <td>
                    <button class="btn btn-primary">
                        Edit
                    </button>
                </td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableSiswaComponent'

}
</script>

<style>

</style>