<script>
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
</section>
  <style>
    .register {
        width: 85%;
        position: absolute;
        right: 0;
        margin: auto;
        height: 100%;
        background-color: antiquewhite;
    }
    .modal-content-register {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 100%;
    }
  </style>