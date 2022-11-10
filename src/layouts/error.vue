<template>
    <div class="block">
        <div class="container">
            <div class="not-found">
                <div v-if="statusCode" class="not-found__404">
                    Oops! Ошибка {{ statusCode }}
                </div>

                <div class="not-found__content">
                    <h1 class="not-found__title">
                        {{ statusCode === 404 ? 'Страница не найдена' : message }}
                    </h1>

                    <template v-if="statusCode === 404">
                        <p class="not-found__text">
                            Мы потеряли эту страницу!
                            <br>
                            давайте поищем ее на сайте
                        </p>
                        <img :src="$url.img('/images/404_gif_2.gif')" alt="" />

                        <form class="not-found__search">
                            <input
                                type="text"
                                class="not-found__search-input form-control"
                                placeholder="Поиск по сайту..."
                                aria-label="Search"
                            >
                            <button type="submit" class="not-found__search-button btn btn-primary">
                                Поиск
                            </button>
                        </form>

                        <p class="not-found__text">
                           Или посмотрите в нашем каталоге
                        </p>

                        <!-- <AppLink :to="$url.catalog()" class="btn btn-secondary btn-sm">
                            Перейти в каталог
                        </AppLink> -->
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>




<script>

import { Vue, Component, Prop } from 'vue-property-decorator'
// import AppLink from '~/components/shared/app-link.vue'

@Component({})
export default class ErrorLayout extends Vue {
    // @Prop({ type: Object, default: () => null }) readonly error!: {statusCode?: number; message?: string} | null

    get statusCode () {
        return (this.error && this.error.statusCode) || 500
    }

    get message () {
        return (this.error && this.error.message) || '<%= messages.client_error %>'
    }
}

</script>

