<template>
  <nav>
    <div class="navbar bg-base-300 rounded">
      <div class="flex-1">
        <NuxtLink to="/" class="btn btn-ghost text-xl">Placeholder</NuxtLink>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <NuxtLink to="/register"> Kayit Ol </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/login">Giriş Yap</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/doctors">Doktorlar</NuxtLink>
          </li>
          <li>
            <label class="swap swap-rotate">
              <!-- this hidden checkbox controls the state -->
              <input type="checkbox" class="theme-controller" value="dark" />
              <Icon name="ph:sun-bold" class="swap-off" size="24" />
              <Icon name="ph:moon-bold" class="swap-on" size="24" />
            </label>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
