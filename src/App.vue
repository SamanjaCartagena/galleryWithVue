<template>
  <div id="signup">
   <form>
    <label>Username</label>&nbsp;
    <input type='text' placeholder='Username'/>
    <br/>
    <label>Email</label>&nbsp;
    <input type='email' placeholder='Email'/>
    <br/>
    <label>Password</label>&nbsp;
    <input type ='password' placeholder="Password" /><br/>
    <button type='submit'> Submit</button> &nbsp;
        <button type='submit' @click="submitForm"> Clear</button>

   </form>
  </div>
</template>

<script>
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {auth, db, usersCollectionRef} from '../src/firebase/index'
export default {


methods:{
  submitForm(){
   
  }

}}
</script>

<style>
#signup{
  text-align: center;
}
form{
  margin:10px;
  height:auto;
  padding:10px;
  text-align: center;
  width:350px;
  border:1px solid black;
 
}
input{
  margin:10px;

}
</style>