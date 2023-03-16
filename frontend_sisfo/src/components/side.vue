<template>
	<div class="sidebar text-white">
		<a
			href="/"
			class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
		>
			<svg class="bi me-2" width="40" height="32">
				<use xlink:href="#bootstrap"></use>
			</svg>

			<!-- <img src="../assets/school.jpg" alt="" width="25%" class="mx-2 my-2" /> -->
			<h3 class="text-white my-4">SISFO PGT</h3>

			<hr class="hr" />
		</a>
		<hr class="" />
		<ul class="nav nav-pills flex-column mb-auto">
			<li class="nav-item">
				<router-link to="/home" class="nav-link text-white" aria-current="page">
					<svg class="bi me-2" width="16" height="16">
						<use xlink:href="#home"></use>
					</svg>
					IPK
				</router-link>
			</li>
			<li>
				<router-link to="/add" class="nav-link text-white">
					<svg class="bi me-2" width="16" height="16">
						<use xlink:href="#speedometer2"></use>
					</svg>
					Poin/Kondite
				</router-link>
			</li>

			<li>
				<router-link to="/dosen" class="nav-link text-white">
					<svg class="bi me-2" width="16" height="16">
						<use xlink:href="#speedometer2"></use>
					</svg>
					Dosen
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "sideCmp",
	};
</script>

<style>
	.sidebar {
		background-color: #4e73df;
		width: 250px;
		max-height: 1000vh;
		margin-left: 0;
	}

	hr {
		margin: 1rem 0;
		color: inherit;
		background-color: currentColor;
		border: 0;
		opacity: 0.25;
	}

	ul li {
		background-color: #4e73df;
	}

	ul li :hover {
		background-color: #3fa2df;
	}

	.logout:hover {
		background-color: #3fa2df;
		border-radius: 0.3rem;
	}
</style>
