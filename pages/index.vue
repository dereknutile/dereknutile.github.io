<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Derek Nutile
      </h1>
      <div class="subtitle">DerekNutile.com</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 48px;
  letter-spacing: 1px;
}

.subtitle {
  display: block;
  font-weight: 400;
  font-size: 30px;
  color: #28a745;
}
</style>
