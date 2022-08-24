<template>
    <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
    </header>
    <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="bg-white">
                <div
                    class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
                >
                    <h2 class="sr-only">Books</h2>

                    <div
                        class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                    >
                        <a
                            v-for="(book, index) in books[0]"
                            :key="index"
                            :href="book.url"
                            class="group"
                        >
                            <div
                                class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
                            >
                                <img
                                    :src="book.image"
                                    :alt="book.image"
                                    class="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">
                                {{ book.title }}
                            </h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">
                                {{ book.price }}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <!-- /End replace -->
        </div>
    </main>
</template>
<script setup>
import axios from "axios";
const books = [];
axios.get("https://api.itbook.store/1.0/search/mongodb").then((response) => {
    books.push(response.data.books);
});
console.log(books);
</script>

<style scoped></style>
