<template>
    <div class="max-w-2xl px-4 py-10 m-auto sm:px-8">
    <main class="max-w-none">
        <div class="text-center">
            <h1 class="text-3xl font-bold">نادي النخبة المطورين</h1>
            <h2 class="text-2xl font-bold">CSIT Developers Club</h2>
        </div>
        <p>نادي طلابي لتطوير المهارات التقنية وتطوير الحلول التكنولوجية للمجتمع المحلي، الفريق ضمن مشروع قادة التحوّل الرقمي التابع رسميًا إلى جامعة البصرة، كلية علوم الحاسوب وتكنولوجيا المعلومات.</p>
        
        <div class="flex justify-between text-center">
            <div v-for="stato in stats[0]?.stat" :key="stato.id" class="flex flex-col">
                <p>{{stato.name}}</p>
                <p>{{stato.stat}}</p>
            </div>
        </div>

        <div class="flex" v-for="post in posts" :key="post.id">
            <Icon class="w-10 h-10" :name="`fluent-emoji:${post.emoji}`" />
            <div class="flex flex-col">
                <a :href="post._path">{{post.title}}</a>
                <p>{{post.description}}</p>
            </div>
        </div>
    </main>
  </div>
</template>

<script setup>
    const { data: posts, pending: postPending } = await useAsyncData('posts', () => queryContent().where({_partial: true, _type: "markdown" }).find())
    const { data: stats, pending: statsPending } = await useAsyncData('stat', () => queryContent().where({_partial: true, _type: "json" }).find())
</script>

