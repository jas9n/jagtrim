<template>
    <div id="nav">
        <nav class="fixed flex justify-between items-center w-full px-12 py-6 bg-white">
            <h2 class="text-xl"><RouterLink to="/">JagTrim International</RouterLink></h2>
            <ul class="flex justify-center space-x-8">
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
            </ul>
        </nav>
    </div>
</template>