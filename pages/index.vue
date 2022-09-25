<template>
    <div class="max-w-3xl px-4 py-10 m-auto sm:px-8">
        <main class="max-w-none">
            <div class="text-center">
                <div class="flex justify-center mb-6">
                    <svg width="156" height="189" viewBox="0 0 156 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M76.8455 31.8079L0 0V31.8079L0.000216272 31.8079V63.6157V95.4235V124.874V156.436V156.682L76.8457 189L155.063 156.682V124.874L76.8457 156.682L27.445 136.234V106.783L76.8457 127.231L155.063 95.4235V63.6157L76.8457 95.4235L27.445 74.9756V43.1679L76.8455 63.6157L155.063 31.8079V0L76.8455 31.8079Z"
                            fill="#0F0F11" />
                    </svg>
                </div>
                <h1 class="text-4xl font-bold">نادي النخبة المطورين</h1>
                <h2 class="text-2xl font-bold">CSIT Developers Club</h2>
            </div>
            <p class="mx-20">نادي طلابي لتطوير المهارات التقنية وتطوير الحلول التكنولوجية للمجتمع المحلي، الفريق ضمن
                مشروع قادة
                التحوّل الرقمي التابع رسميًا إلى جامعة البصرة، كلية علوم الحاسوب وتكنولوجيا المعلومات.</p>

            <div class="flex justify-center my-10">
                <div class="mx-2 h-20 w-20 mt-1">
                    <img src="assets/AlbasrahUniversityLogo.png" alt="">
                </div>
                <div class="mx-2 h-20 w-20">
                    <img src="assets/ITLogo.png" alt="">
                </div>
            </div>

            <div class="flex justify-between text-center text-2xl font-bold mx-20">
                <div v-for="stato in stats[0]?.stat" :key="stato.id" class="flex flex-col">
                    <p>{{stato.name}}</p>
                    <p>{{stato.stat}}</p>
                </div>
            </div>

            <p class="text-3xl font-semibold mb-3 ml-10 mt-8">أعضاء الفريق</p>

            <div class="flex justify-between mt-2">
                <div class="flex flex-col">
                    <div class="flex mt-5">
                        <div
                            class="
                            drop-shadow-[2px_2px_0px_#4F009D]
                            ">
                            <img class="h-16 w-16 border-2
                            drop-shadow-[2px_2px_0px_#FFFFFF]

                            border-black"
                            src="assets/mosa.jpg"
                             alt="">
                        </div>
                        <div class="mt-1 mr-5">
                            <p class="text-xl font-semibold">موسى نمير</p>
                            <p class="">Front End developer</p>
                        </div>
                    </div>

                    <div class="flex mt-5">
                        <div class="">
                            <img class="h-16 w-16 ml-5 border-2 border-black" src="assets/mosa.jpg" alt="">
                        </div>
                        <div class="mt-1 ">
                            <p class="text-xl font-semibold">موسى نمير</p>
                            <p class="">Front End developer</p>
                        </div>
                    </div>

                    <div class="flex mt-5">
                        <div class="">
                            <img class="h-16 w-16 ml-5 border-2 border-black" src="assets/mosa.jpg" alt="">
                        </div>
                        <div class="mt-1 ">
                            <p class="text-xl font-semibold">موسى نمير</p>
                            <p class="">Front End developer</p>
                        </div>
                    </div>
                </div>
                <div class="m-auto">
                    <svg class="mt-2" width="105" height="127" viewBox="0 0 105 127" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="3.00267" y="74.5" width="70" height="70" transform="rotate(-45 3.00267 74.5)"
                            stroke="black" stroke-width="3" />
                        <rect x="3.12132" y="51.6188" width="70" height="70" transform="rotate(-45 3.12132 51.6188)"
                            stroke="black" stroke-width="3" />
                        <rect x="14.4309" y="62.9282" width="54.0061" height="54.0061"
                            transform="rotate(-45 14.4309 62.9282)" fill="#4F009D" stroke="#0F0F11" stroke-width="3" />
                    </svg>

                </div>
                <div class="flex flex-col">
                    <div class="flex flex-col">
                        <div class="flex mt-5">
                            <div class="mt-1 ">
                                <p class="text-xl font-semibold">موسى نمير</p>
                                <p class="">Front End developer</p>
                            </div>
                            <div class="">
                                <img class="h-16 w-16 mr-5 border-2 border-black" src="assets/mosa.jpg" alt="">
                            </div>
                        </div>

                        <div class="flex mt-5">
                            <div class="mt-1 ">
                                <p class="text-xl font-semibold">موسى نمير</p>
                                <p class="">Front End developer</p>
                            </div>
                            <div class="">
                                <img class="h-16 w-16 mr-5 border-2 border-black" src="assets/mosa.jpg" alt="">
                            </div>
                        </div>

                        <div class="flex mt-5">
                            <div class="mt-1 ">
                                <p class="text-xl font-semibold">موسى نمير</p>
                                <p class="">Front End developer</p>
                            </div>
                            <div class="">
                                <img class="h-16 w-16 mr-5 border-2 border-black" src="assets/mosa.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p class="text-3xl font-semibold mb-3 ml-10 mt-8">اخر المنشورات</p>

            <div class="flex">
                <div v-for="post in posts" :key="post.id" class="flex w-full border-2 border-black ">
                    <div class="m-3">
                        <Icon class="w-10 h-10" :name="`fluent-emoji:${post.emoji}`" />
                    </div>
                    <div class="mt-2">
                        <a :href="post._path" class="font-semibold text-lg">{{post.title}}</a>
                        <p>{{post.description}}</p>
                    </div>
                </div>
            </div>

            <p class="text-3xl font-semibold text-center mb-3 mt-20">يمكنك المساهمة في تطوير المجتمع المحلي</p>

            <div class="flex justify-around">
                <div class="mt-2">
                    <span>
                        <Icon name="fluent-emoji:man-teacher-light" class="w-44 h-24" />
                    </span>
                    <p class="mt-2">عبر تقديم الجلسات في مجال خبرتك.</p>
                </div>
                <div class="mt-2">
                    <span>
                        <Icon name="fluent-emoji:handshake" class="w-44 h-24" />
                        <p class="mt-2">عبر الدعم ورعاية الأحداث للنادي.</p>
                    </span>
                </div>
            </div>

            <p class="text-center font-semibold text-lg mt-20">نادي النخبة المطورين</p>
            <div class="flex justify-center">
                <span>
                    <Icon name="fa-brands:telegram" class="w-5 h-5 mx-2" />
                </span>
                <span>
                    <Icon name="fa-brands:instagram" class="w-5 h-5 mx-2" />
                </span>
            </div>
        </main>
    </div>
</template>

<script setup>
const { data: posts, pending: postPending } = await useAsyncData('posts', () => queryContent().where({ _partial: true, _type: "markdown" }).find())
const { data: stats, pending: statsPending } = await useAsyncData('stat', () => queryContent().where({ _partial: true, _type: "json" }).find())
</script>
