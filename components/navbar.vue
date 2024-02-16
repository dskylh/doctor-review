<script></script>

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
        </ul>
      </div>
    </div>
  </nav>
</template>
