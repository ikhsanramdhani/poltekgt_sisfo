<template>
    <div>
        <section class="vh-100" style="background-color: #508bfc;">
            <div class="container py-5 h-100" >
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style="border-radius: 1rem;" >
                            <div class="card-body p-5 text-center">

                                <h3 class="mb-5">Sign in</h3>

                                <div class="form-outline mb-4">
                                <input type="email" class="form-control form-control-lg" placeholder="Masukan NIM"
                                v-model="loginData.id" />
                                </div>

                                <div class="form-outline mb-4">
                                <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Password" 
                                v-model="loginData.password"/>
                                </div>

                                <!-- Checkbox -->
                                <div class="form-check d-flex justify-content-start mb-4">
                                <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                                <label class="form-check-label" for="form1Example3"> Remember password </label>
                                </div>

                                <button class="btn btn-primary btn-lg btn-block" @click="loginDosen" type="submit">Login</button>

                                <hr class="my-4">


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import dosenService from '@/services/dosenService';
export default {
    name: 'LoginComponent',
    data(){
        return {
            loginData: {
                "id"        : null,
                "password"   : null,
            }
        }
    },
    methods: {
        loginDosen(){
            let data = this.loginData;

            dosenService.login(data)
                .then(response => {
                    console.log(response.data);
                    this.$router.push("/nilai");
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },

}
</script>

<style>

</style>
=======
	<div>
		<!-- Include the above in your HEAD tag -->

		<link
			rel="stylesheet"
			href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
		/>
		<div class="main">
			<div class="container">
				<center>
					<div class="middle">
						<div id="login">
							<form action="javascript:void(0);" method="get">
								<fieldset class="clearfix">
									<p>
										<span class="fa fa-user"></span
										><input type="text" Placeholder="Username" />
									</p>
									<!-- JS because of IE support; better: placeholder="Username" -->
									<p>
										<span class="fa fa-lock"></span
										><input type="password" Placeholder="Password" />
									</p>
									<!-- JS because of IE support; better: placeholder="Password" -->

									<div>
										<span
											style="
												width: 48%;
												text-align: left;
												display: inline-block;
											"
											><a class="small-text , text-light" href="#"
												>Forgot password?</a
											></span
										>
										<router-link to="/dosen">
											<span
												style="
													width: 50%;
													text-align: right;
													display: inline-block;
												"
												><input type="submit" value="Sign In"
											/></span>
										</router-link>
									</div>
								</fieldset>
								<div class="clearfix"></div>
							</form>

							<div class="clearfix"></div>
						</div>
						<!-- end login -->
						<div class="logo">
							<img src="../assets/gt.png" alt="gambar" />

							<div class="clearfix"></div>
						</div>
					</div>
				</center>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "FormLogin",
	};
</script>

<style>
	@charset "utf-8";

	/* @import url//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css); */

	div.main {
		background: #0264d6;
		/* Old browsers */
		background: -moz-radial-gradient(
			center,
			ellipse cover,
			#0264d6 1%,
			#1c2b5a 100%
		);
		/* FF3.6+ */
		background: -webkit-gradient(
			radial,
			center center,
			0px,
			center center,
			100%,
			color-stop(1%, #0264d6),
			color-stop(100%, #1c2b5a)
		);
		/* Chrome,Safari4+ */
		background: -webkit-radial-gradient(
			center,
			ellipse cover,
			#0264d6 1%,
			#1c2b5a 100%
		);
		/* Chrome10+,Safari5.1+ */
		background: -o-radial-gradient(
			center,
			ellipse cover,
			#0264d6 1%,
			#1c2b5a 100%
		);
		/* Opera 12+ */
		background: -ms-radial-gradient(
			center,
			ellipse cover,
			#0264d6 1%,
			#1c2b5a 100%
		);
		/* IE10+ */
		background: radial-gradient(ellipse at center, #0264d6 1%, #1c2b5a 100%);
		/* W3C */
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0264d6', endColorstr='#1c2b5a', GradientType=1);
		/* IE6-9 fallback on horizontal gradient */
		height: calc(100vh);
		width: 100%;
	}

	[class*="fontawesome-"]:before {
		font-family: "FontAwesome", sans-serif;
	}

	/* ---------- GENERAL ---------- */

	* {
		box-sizing: border-box;
		margin: 0px auto;

		/* &:before,
  &:after {
    box-sizing: border-box;
  } */
	}

	body {
		color: #606468;
		font: 87.5%/1.5em "Open Sans", sans-serif;
		margin: 0;
	}

	a {
		color: #eee;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	input {
		border: none;
		font-family: "Open Sans", Arial, sans-serif;
		font-size: 14px;
		line-height: 1.5em;
		padding: 0;
		/* -webkit-appearance: none; */
	}

	p {
		line-height: 1.5em;
	}

	.clearfix {
		*zoom: 1;

		/* &:before,
  &:after {
    content: ' ';
    display: table;
  } */

		/* &:after {
    clear: both;
  } */
	}

	.container {
		left: 50%;
		position: fixed;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	/* ---------- LOGIN ---------- */

	#login form {
		width: 250px;
	}

	#login,
	.logo {
		display: inline-block;
		width: 40%;
	}

	#login {
		border-right: 1px solid #fff;
		padding: 0px 22px;
		width: 59%;
	}

	.logo {
		color: #fff;
		font-size: 50px;
		line-height: 125px;
	}

	#login form span.fa {
		background-color: #fff;
		border-radius: 3px 0px 0px 3px;
		color: #000;
		display: block;
		float: left;
		height: 50px;
		font-size: 24px;
		line-height: 50px;
		text-align: center;
		width: 50px;
	}

	#login form input {
		height: 50px;
	}

	fieldset {
		padding: 0;
		border: 0;
		margin: 0;
	}

	#login form input[type="text"],
	input[type="password"] {
		background-color: #fff;
		border-radius: 0px 3px 3px 0px;
		color: #000;
		margin-bottom: 1em;
		padding: 0 16px;
		width: 200px;
	}

	#login form input[type="submit"] {
		border-radius: 3px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		background-color: #000000;
		color: #eee;
		font-weight: bold;
		/* margin-bottom: 2em; */
		text-transform: uppercase;
		padding: 5px 10px;
		height: 30px;
	}

	#login form input[type="submit"]:hover {
		background-color: #d44179;
	}

	#login > p {
		text-align: center;
	}

	#login > p span {
		padding-left: 5px;
	}

	.middle {
		display: flex;
		width: 600px;
	}
</style>
