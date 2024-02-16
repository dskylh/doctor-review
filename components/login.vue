<template>
  <div class="relative flex flex-col items-center justify-center h-screen overflow-hidden">
    <div class="w-full p-6 border-t-4 rounded-md border-top border-accent lg:max-w-lg bg-base-200">
      <h1 class="text-3xl font-semibold text-center">Giriş Yap</h1>
      <form class="space-y-4">
        <div>
          <label class="label">
            <span class="text-base label-text">E-posta</span>
          </label>
          <input type="text" class="w-full input input-bordered" />
        </div>
        <div>
          <label class="label">
            <span class="text-base label-text">Şifre</span>
          </label>
          <input type="password" class="w-full input input-bordered" />
        </div>
        <a href="#" class="text-xs text-gray-600 hover:underline hover:text-blue-600">Şifremi Unuttum</a>
        <div>
          <button class="btn btn-primary btn-block mt-1">Giriş Yap</button>
        </div>
      </form>
    </div>
  </div>
</template>
