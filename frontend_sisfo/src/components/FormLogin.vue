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