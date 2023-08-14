<template>
  <q-page>
    <q-list padding>
      <template v-if="searchResults.length > 0">
        <q-item v-for="item in searchResults" :key="item.label">
          <q-item-section>
            <router-link class="routerlink" :to="baseUrl + item.url">
              {{ searchItemTitle(item) }}
            </router-link>
            <q-item-label caption>{{ item.type.toUpperCase() }}</q-item-label>
            <q-item-label caption>
              <div v-html="item.summary" style="width: 100%; overflow: scroll;"></div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-else>
        <q-item>
          <q-item-section>
            <q-item-label caption>Nothing found</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-page>
</template>

<script>
import ViewModel from "../ViewModel";
import ProjInfo from "../proj_info.json";
import Fuse from "fuse.js";

export default {
  props: {
    baseUrl: { type: String },
    query: { type: String },
  },
  data() {
    return {
      searchResults: [],
    };
  },
  meta() {
    return {
      title: ProjInfo.name + " API",
      meta: {
        description: { name: "description", content: ProjInfo.description },
      },
    };
  },
  watch: {
    query(val) {
      if (val) {
        this.search(val);
      }
    },
  },
  methods: {
    search(text) {
      console.log("searching", text);
      const timeStart = performance.now();
      let fuse = ViewModel.getSearchInstance();
      if (fuse == null) {
        const options = {
          includeScore: true,
          useExtendedSearch: true,
          keys: [
            // { name: 'typename', weight: 1.0 },
            { name: "member", weight: 10 }.name,
            { name: "url", weight: 2.0 },
            { name: "keywords", weight: 3.0 },
          ],
        };
        const searchList = ViewModel.getSearchList();
        fuse = new Fuse(searchList, options);
        ViewModel.setSearchInstance(fuse);
      }
      const timeBuild = performance.now();
      const result = fuse.search(text);
      console.log("result:", result)
      const timeEnd = performance.now();
      console.log(`build time ${timeBuild - timeStart} ms`);
      console.log(`search time ${timeEnd - timeBuild} ms`);
      let count = 25;
      if (result.length < count) count = result.length;
      const rc = [];
      for (let i = 0; i < count; i++) {
        if (result[i].score < 0.1) {
          rc.push({...result[i].item, "score":result[i].score});
        }
      }

      rc.sort(function(a, b) {
          return a.score - b.score;
      });

      console.log("sorted:",rc)

      this.searchResults = rc;
    },
    searchItemTitle(item) {
      if (
        item.type !== "property" &&
        item.type !== "method" &&
        item.type !== "event"
      ) {
        return item.typename;
      }
      return item.typename + " " + item.member;
    },
  },
};
</script>
