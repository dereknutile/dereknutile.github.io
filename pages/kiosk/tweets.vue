<template>
    <div class="fill-screen">
        <div class="flex flex-wrap overflow-hidden">

            <div class="w-3/5 p-8 overflow-hidden bg-white text-black">
                <a class="twitter-timeline" href="https://twitter.com/ClackcoSheriff">Tweets by ClackcoSheriff</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>

            <div class="w-2/5 p-4 text-center">
                <div class="center-image p-2">
                    <img src="/img/sheriff.jpg" class="mx-auto rounded-lg border-2 border-black shadow-md" alt="CCSO Sheriff">
                </div>
                
                <h2>Sheriff Angela Brandeburg</h2>
                    
                <h5>Follow the Clackamas County Sheriff's Office on Twitter <a href="https://twitter.com/ClackCoSheriff">@ClackCoSheriff</a></h5>
                
                <div class="center-image p-5">
                    <img src="/img/qr-ccso-twitter.jpg" class="mx-auto rounded-lg border-2 border-black" alt="CCSO Twitter QR Code">
                </div>  
            </div>

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
.fill-screen {
  min-height: 100vh;
}
.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
h2 {
    font-size: 28px;
    margin-top: 4px;
    margin-bottom: 4px;
}
h5 {
    font-size: 20px;
    margin-top: 4px;
    margin-bottom: 4px;
}
</style>

