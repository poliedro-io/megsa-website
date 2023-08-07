<template>
  <form name="contact" class="md:flex md:items-center" method="post" data-netlify="true" netlify-honeypot="test-field" action="/form">
    <input type="hidden" name="form-name" value="contact" />

    <div class="md:hover:shadow-xl transition">
      <div class="hidden md:block py-6 px-4 md:bg-gray-100 rounded-t-md">
        <p class="text-xl text-gray-600 font-medium">Formulario de contacto</p>
      </div>
      <div class="md:px-4 md:py-5 md:bg-white md:p-6">
        <div class="grid grid-cols-2 gap-4 md:gap-6">
          <div class="col-span-2 sm:col-span-1">
            <div class="hidden">
              <label> Test field: <input name="test-field" /> </label>
            </div>
            <label for="email" class="block text-sm font-medium text-gray-300 md:text-yellow-600">Email</label>
            <input
              type="email"
              name="email"
              autocomplete="email"
              required
              placeholder="ejemplo@gmail.com"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <div class="flex justify-between">
              <label for="nombre" class="block text-sm font-medium text-gray-300 md:text-yellow-600">Teléfono</label>
              <span class="text-gray-400 text-sm">Opcional</span>
            </div>
            <input
              type="tel"
              name="telefono"
              autocomplete="tel"
              placeholder="+569 12345678"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>

          <div class="col-span-2">
            <label for="mensaje" class="block text-sm font-medium text-gray-300 md:text-yellow-600">Mensaje</label>
            <div class="mt-1">
              <textarea
                name="mensaje"
                rows="5"
                required
                class="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Necesito digitalizar todos los procesos de mi empresa"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="py-6 md:p-4 md:bg-gray-100 text-right rounded-b-md">
        <button type="submit" class="btn yellow w-full md:w-40">Enviar</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      items: ['Minería', 'Construcción', 'Retail', 'Agricultura', 'Courier / Transfer', 'Otro'],
    }
  },
}
</script>
