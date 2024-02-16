<template>
  <div class="navbar bg-base-300 rounded">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Placeholder</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/register">Kayit Ol</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login">Giriş Yap</NuxtLink>
        </li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2 bg-base-200 rounded-t-none">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
