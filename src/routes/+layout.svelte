<script>
	import Footer from '$lib/ui/Footer.svelte';
	import Header from '$lib/ui/Header.svelte';
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
</script>

<div class="flex flex-col h-full overflow-auto">
	<Header />
	<slot />
	<Footer />
</div>

<Toaster richColors position="top-center" />
