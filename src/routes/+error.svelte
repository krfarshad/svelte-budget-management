<script>
	import { page } from '$app/stores';
	export let errorCode = $page.error?.code ?? 404;
	export let errorMessage = $page.error?.message ??  "Page Not Found";
	export let onGoHome = () => {
		window.location.href = '/';
	};
</script>


<div class="relative flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 px-6">
    <div class="absolute top-0 left-0 w-full h-full opacity-20"></div>
    
    <div class="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full relative z-10 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div class="animate-bounce mb-4">
            <span class="text-8xl font-bold">!</span>
        </div>

        <h1 class="text-5xl font-extrabold text-gray-800">{errorCode}</h1>
        <p class="mt-3 text-xl font-semibold text-gray-700">{errorMessage}</p>
        <p class="mt-2 text-gray-500">It seems we can’t find the page you’re looking for. Try checking the URL or go back home.</p>
        
        <button
            class="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200"
            on:click={onGoHome}
        >
            Take Me Home
        </button>
    </div>
</div>

<style>
	
</style>