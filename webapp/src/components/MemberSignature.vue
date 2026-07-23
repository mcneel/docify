<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { parseSignatureChunks, signatureAnchorRef } from '@/utils/signatures.js'
import { useTypeLinks } from '@/composables/useTypeLinks.js'
import Icon from './Icon.vue'
import Badge from './Badge.vue'
import CodeCard from './CodeCard.vue'

const props = defineProps({
  member: { type: Object, required: true },
  datatype: { type: Object, default: null }, // the type node (for enum name fallback)
  baseUrl: { type: String, default: '/' },
})

const router = useRouter()
const links = useTypeLinks(() => props.datatype?.name, props.baseUrl)
const { typeUrl, typeFromToken } = links

const chunks = computed(() => parseSignatureChunks(props.member, links))
const returnChunks = computed(() => chunks.value.filter((c) => c.isReturn))
const isDisabled = computed(() => !!(props.member.deprecated || props.member.obsolete))

function anchorTo() {
  router.push({ hash: '#' + signatureAnchorRef(props.member.signature) })
}
function isInternal(link) {
  return link && !link.toLowerCase().startsWith('http')
}
function enumTitle(token) {
  const t = typeFromToken(token)
  return t && t.dataType === 'enum' ? t.values.map((v) => v.signature).join(', ') : undefined
}
</script>

<template>
  <div class="py-2">
    <!-- Description -->
    <div>
      <div class="flex items-center gap-1 text-xl font-medium">
        Description:
        <button
          type="button"
          class="cursor-pointer rounded-full p-1 text-blue-600 hover:bg-blue-600/10"
          aria-label="Link to this member"
          @click="anchorTo"
        >
          <Icon name="link" />
        </button>
      </div>
      <p v-if="member.summary" class="mt-1 text-neutral-600 dark:text-neutral-300">
        <span v-html="member.summary" />
      </p>
    </div>

    <div class="pl-6">
      <!-- Syntax -->
      <div class="mt-3">
        <div v-if="member.signature" class="text-xl font-medium">Syntax:</div>
        <CodeCard :text="member.signature">
          <span :class="isDisabled ? 'is-disabled' : ''">
            <!-- Trailing space lives in the expression; Vue's condense strips template whitespace. -->
            <template v-if="member.modifiers && member.modifiers.length"
              >{{ member.modifiers.join(' ') + ' ' }}</template
            >
            <template v-for="(chunk, i) in chunks" :key="i">
              <template v-if="chunk.indent"><br /><span class="pl-6" /></template>
              <template v-if="chunk.break"><br /></template>
              <template v-if="chunk.link">
                <RouterLink
                  v-if="isInternal(chunk.link)"
                  :to="chunk.link"
                  class="routerlink"
                  :title="chunk.enumValues ? chunk.enumValues.join(', ') : undefined"
                  >{{ chunk.name }}</RouterLink
                >
                <a v-else :href="chunk.link" target="_blank" rel="noopener" class="routerlink">{{
                  chunk.name
                }}</a>
              </template>
              <span v-else :class="chunk.role === 'name' ? 'italic' : ''">{{ chunk.name }}</span>
            </template>
          </span>
        </CodeCard>
      </div>

      <!-- Modifiers / status badges -->
      <div class="mt-3 space-y-2">
        <div
          v-if="member.protected || member.virtual || member.deprecated || member.obsolete"
          class="flex flex-wrap gap-2"
        >
          <Badge v-if="member.protected" outline color="warning">protected</Badge>
          <Badge v-if="member.virtual" outline color="warning">virtual</Badge>
          <Badge
            v-if="member.deprecated"
            outline
            color="negative"
            :title="`Deprecated in version ${member.deprecated}`"
            >deprecated in {{ member.deprecated }}</Badge
          >
          <Badge v-if="member.obsolete" outline color="negative">obsolete: {{ member.obsolete }}</Badge>
        </div>

        <!-- Parameters -->
        <template v-if="member.parameters && member.parameters.length">
          <div class="text-xl font-medium">Parameters:</div>
          <div v-for="parameter in member.parameters" :key="parameter.name">
            <ul class="m-0 list-none p-0">
              <li class="italic">{{ parameter.name }}</li>
              <li class="pl-6 font-light">
                <span>Type: </span>
                <template v-if="typeUrl(parameter.type)">
                  <RouterLink
                    v-if="isInternal(typeUrl(parameter.type))"
                    :to="typeUrl(parameter.type)"
                    class="routerlink font-normal"
                    :title="enumTitle(parameter.type)"
                    >{{ parameter.type }}</RouterLink
                  >
                  <a
                    v-else
                    :href="typeUrl(parameter.type)"
                    target="_blank"
                    rel="noopener"
                    class="routerlink font-normal"
                    >{{ parameter.type }}</a
                  >
                </template>
                <span v-else class="disabledLink font-normal opacity-70">{{ parameter.type }}</span>
              </li>
              <li class="pl-6 font-light" v-html="parameter.summary" />
            </ul>
          </div>
        </template>

        <!-- Returns -->
        <template v-if="returnChunks.length">
          <div class="text-xl font-medium">Returns:</div>
          <div class="font-light">
            <template v-for="(rt, i) in returnChunks" :key="i">
              <template v-if="rt.link">
                Type:
                <RouterLink
                  v-if="isInternal(rt.link)"
                  :to="rt.link"
                  class="routerlink"
                  :title="rt.enumValues ? rt.enumValues.join(', ') : undefined"
                  >{{ rt.name }}</RouterLink
                >
                <a v-else :href="rt.link" target="_blank" rel="noopener" class="routerlink">{{
                  rt.name
                }}</a>
              </template>
              <template v-else>Type: {{ rt.name }}</template>
            </template>
          </div>
        </template>
        <p v-if="member.returns" class="font-light"><span v-html="member.returns" /></p>

        <!-- Remarks -->
        <template v-if="member.remarks">
          <div class="text-xl font-medium">Remarks:</div>
          <div class="font-light" v-html="member.remarks" />
        </template>

        <!-- Since -->
        <template v-if="member.since">
          <div class="mt-2 text-sm font-bold">Available since:</div>
          <div class="text-sm">{{ member.since }}</div>
        </template>
      </div>
    </div>
  </div>
</template>
