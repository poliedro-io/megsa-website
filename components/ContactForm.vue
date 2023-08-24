<template>
  <form name="contact" method="post" data-netlify="true" netlify-honeypot="test-field" action="/form">
    <input type="hidden" name="form-name" value="contact" />

    <div>
      <p class="text-xl font-medium text-white">O escríbenos directamente desde aquí:</p>
      <div class="py-6">
        <div class="grid grid-cols-2 gap-4 md:gap-6">
          <div class="col-span-2 sm:col-span-1">
            <div class="hidden">
              <label> Test field: <input name="test-field" /> </label>
            </div>
            <label for="email" class="block text-sm font-medium text-gray-300">Tu email</label>
            <input
              type="email"
              name="email"
              autocomplete="email"
              required
              placeholder="ejemplo@gmail.com"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <div class="flex justify-between">
              <label for="nombre" class="block text-sm font-medium text-gray-300">Tu teléfono</label>
              <span class="text-gray-400 text-sm">Opcional</span>
            </div>
            <input
              type="tel"
              name="telefono"
              autocomplete="tel"
              placeholder="+569 12345678"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div class="col-span-2">
            <label for="mensaje" class="block text-sm font-medium text-gray-300">Mensaje</label>
            <div class="mt-1">
              <textarea
                name="mensaje"
                rows="5"
                required
                class="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Requiero servicios de aseo industrial para mi empresa"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="py-4 text-right rounded-b-md">
        <button type="submit" class="btn blue w-full md:w-40">Enviar</button>
      </div>
    </div>
  </form>
</template>
