<template>
  <q-page>
    <q-list padding>
      <template v-if="searchResults.length > 0">
        <q-item v-for="item in searchResults.filter(r => filterByVersion(r))" :key="item.label">
          <q-item-section>
            <router-link class="routerlink" :to="baseUrl + item.url">
              {{ searchItemTitle(item) }}
            </router-link>
            <q-item-label caption>{{ item.type.toUpperCase() }}</q-item-label>
            <q-item-label caption>
              <div v-html="item.summary" style="width: 100%;"></div>
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
      <q-item v-if="theresMore">
          <q-item-section>
            <q-btn outline rounded color="primary" label="Show More" @click="moreResults"/>
          </q-item-section>
        </q-item>
    </q-list>
  </q-page>
</template>

<script>
import ViewModel from "../ViewModel";
import ProjInfo from "../proj_info.json";
import Fuse from "fuse.js";
import { ref } from "vue";

export default {
  props: {
    baseUrl: { type: String },
    query: { type: String },
  },
  data() {
    return {
      rawResults: [],
      searchResults: [],
      resultCount: 25,
      theresMore: false,
      filterVersion: ""
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
  mounted() {
    this.filterVersion = this.$route.query.version;
  },
  watch: {
    query(val) {
      this.theresMore = false;
      this.resultCount = 25;
      if (val) {
        this.search(val);
      }
    },
    '$route'(to, from) {
      this.filterVersion = to.query.version;
    }
  },
  methods: {
    filterByVersion (result) {
        if(result.since){
          return !ViewModel.sinceIsGreater(result.since, this.filterVersion)
        }
        return true
    },
    search(text) {
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
      this.rawResults = fuse.search(text);

      // const timeEnd = performance.now();
      // console.log(`build time ${timeBuild - timeStart} ms`);
      // console.log(`search time ${timeEnd - timeBuild} ms`);

      // if (filteredResults.value.length < resultCount.value) resultCount.value = filteredResults.value.length;

      this.sortResults();
    },

    sortResults(){
      const rc = [];
      for (let i = 0; i < this.rawResults.length; i++) {
        if (this.rawResults[i].score < 0.1) {
          if (i >  this.resultCount-1){
            this.theresMore = true;
            break;
          }
          rc.push({...this.rawResults[i].item, "score":this.rawResults[i].score});
        }
      }

      rc.sort(function(a, b) {
          return a.score - b.score;
      });
      // console.log("raw search results:", rc)
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

    moreResults() {
      this.resultCount *= 2;
      this.sortResults();
    }
  },
};
</script>
