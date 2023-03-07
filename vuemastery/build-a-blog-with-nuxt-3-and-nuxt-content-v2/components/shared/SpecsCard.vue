<script setup lang="ts">
import { computed } from 'vue'

type SpecsCardProps = {
    image?: SpecsImageProps
    title: string
    bodyText?: string
    linkText: string
    linkUrl: string
    component?: any
}

type SpecsImageProps = {
    /**
     * These are assumed to be in reverse breakpoint order, i.e. largest (first) to smallest (last), `xl` to `xs`.
     * We work out what the fallback image `src` from this assumption.
     */
    sources: SpecsImageSource[]
    alt?: string
    lazy?: boolean
}

type SpecsImageSource = {
    media?: string
    sizes?: string
    srcSet: SpecsImageSourceSrcSetEntry[]
    type?: string
    width?: number
    height?: number
}

type SpecsImageSourceSrcSetEntry = {
    src: string
    width: number
}

const props = withDefaults(defineProps<SpecsCardProps>(), { component: 'div' })

const titleId = computed((): string => {
    return props.title.replace(/ /g, '-')
})
</script>

<template>
    <div class="card">
        <div v-if="props.image?.sources" class="image-container">
            <div class="image">
                <SpecsImage v-bind="props.image" />
            </div>
        </div>
        <h5 :id="titleId" component="h4" variant="heading-5">
            {{ props.title }}
        </h5>
        <p v-if="props.bodyText" component="p" variant="paragraph-default" class="body" data-testid="card-body-text">
            {{ props.bodyText }}
        </p>
        <a :aria-describedby="titleId" :href="props.linkUrl" size="large" class="link">
            {{ props.linkText }}
            <SpeciIcon name="ChevronRight" size="medium" />
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 d-flex">
        <a href="#" class="card">
            <img
                v-if="props.image?.sources"
                src="
                https://via.placeholder.com/545x273/ececec/222.jpg
                "
                alt=""
                class="img-fluid"
                loading="lazy"
                width="545"
                height="273"
            />
            <div class="card__padder">
                <div class="card__header">
                    <h3 class="card__title"> #ececec </h3>
                </div>
                <div v-if="props.image?.sources" class="card__body">
                    <p> Grey </p>
                </div>

                <div class="card__footer">
                    <span class="card__button btn_tertiary">
                        <span class="btn_tertiary__label"> Find out more </span>
                    </span>
                </div>
            </div>
        </a>
    </div>
</template>

<style scoped>
.card {
    position: relative;
}

.image-container {
    border-radius: var(--border-radius-1);
    margin-bottom: var(--spacing-4);
    overflow: hidden;
}
.image {
    transition: transform 0.5s;
}

.card:hover .image,
.card:focus-within .image {
    transform: scale(1.25);
}
.link {
    margin-top: var(--spacing-2);
}

.card:hover .link {
    color: var(--color-racing-dark);
}

.body {
    color: var(--color-smoke);
    margin-top: var(--spacing-1);
}

.card .link::after {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>
