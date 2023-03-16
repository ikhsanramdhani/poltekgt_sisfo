<template>
	<table class="table table-bordered">
		<thead>
			<tr>
				<th scope="col">Nim</th>
				<th scope="col">Nama</th>
				<th scope="col">Kelas</th>
				<th scope="col">Jurusan</th>
				<th scope="col">Nilai</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">1</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
				<td><Button class="btn btn-primary">Ubah</Button></td>
			</tr>
			<tr>
				<th scope="row">2</th>
				<td>Thornton</td>
				<td>Jacob</td>
				<td>@fat</td>
				<td><Button class="btn btn-primary">Ubah</Button></td>
			</tr>
			<tr>
				<th scope="row">3</th>
				<td>Larry the Bird</td>
				<td>@twitter</td>
				<td>@twitter</td>
				<td><Button class="btn btn-primary">Ubah</Button></td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	export default {
		name: "TableMh",
	};
</script>

<style>
	.table {
		margin: auto;
		width: 70vh;
	}
</style>
