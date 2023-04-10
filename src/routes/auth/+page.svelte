<script>
	import { enhance } from '$app/forms';
</script>
<section class="register">
<div class="modal-content-register">
    <h3>Register</h3>
    <form action="?/register" method="POST">
      <label for="email">
        <input type="email" name="email" placeholder="Email" autocomplete="off" />
      </label>
      <label for="name">
        <input type="text" name="name" placeholder="Username" autocomplete="off" />
      </label>
      <label for="instagram">
        <input type="text" name="instagram" placeholder="Enter your instagram" autocomplete="off" />
      </label>
      <label for="password">
        <input type="password" autocomplete="off" name="password" placeholder="Password" />
      </label>
      <label for="passwordConfirm">
        <input type="password" name="passwordConfirm" placeholder="Confirm Password" autocomplete="off" />
      </label>
      <button class="button2" type="submit">Submit</button>
    </form>
  </div>
  <div class="modal-content-login">
    <h3>Login</h3>
<form class="loginn" action="?/login" method="POST" use:enhance>
  <label for="email">
    <input type="email" name="email" placeholder="E-Mail" autocomplete="off"/>
  </label>
  <label for="password">
    <input type="password"  name="password" placeholder="Password" autocomplete="off" />
  </label>
  <button type="submit" class="button2">Login</button>
  </form>
  </div>
</section>
  <style>
    .register {
        width: 82%;
        position: absolute;
        right: 0;
        margin: auto;
        height: 100%;
        background-color: antiquewhite;
    }
    .modal-content-register, .modal-content-login {
  padding: 30px;
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

input[type="email"],
input[type="text"],
input[type="password"] {
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

input[type="email"]:focus,
input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

button[type="submit"] {
  background-color: #0066cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0052a3;
}

.modal-content-login {
  background-color: #f5f5f5;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.modal-content-login h3 {
  margin-bottom: 20px;
}

.loginn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-content-login input[type="email"],
.modal-content-login input[type="password"] {
  width: 100%;
  margin-bottom: 20px;
}
  </style>