<template>
  <div class="h-screen">
    <div
      v-if="verification"
      class="
        pt-4
        fixed
        top-0
        left-0
        right-0
        z-50
        w-full
        md:inset-0 md:h-full
        tran
        overflow-x-hidden
        flex flex-col
        items-center
        gap-2
      "
    >
      <client-only placeholder="loading...">
        <input
          class="self-start w-48 text-black my-4 ml-4 border rounded-md border-theme-1 pl-2"
          type="text"
          v-model="category"
          placeholder="Категория"
        />

        <input
          class="self-start w-48 text-black my-4 ml-4 border rounded-md border-theme-1 pl-2"
          type="text"
          v-model="title"
          placeholder="Тайтл"
        />
        <input
          class="self-start w-48 text-black my-4 ml-4 border rounded-md border-theme-1 pl-2"
          type="text"
          v-model="picterUrl"
          placeholder="URL картинки"
        />
        <div class="self-start ml-4 flex gap-2 order-first">
          <label
            class="text-black w-12 flex-none xl:w-auto xl:flex-initial mr-2"
            >Направление</label
          >
          <select
            v-model="filter"
            class="
              text-black
              input
              w-full
              xxl:w-full
              mt-2
              sm:mt-0 sm:w-auto
              border
              rounded-md
            "
          >
            <option value="blog">Блог</option>
            <option value="services">Услуги</option>
          </select>
        </div>

        <ckeditor-nuxt
          ref="ckeditor"
          class="h-screen"
          v-model="contentHolder"
          :config="editorConfig"
        />
        <div class="flex gap-2">
          <button
            type="button"
            class="
              bg-theme-1
              px-2
              py-4
              rounded-lg
              w-48
              text-theme-8
              hover:transform hover:scale-95
            "
            @click="sendData()"
          >
            Send Text
          </button>
          <button
            type="button"
            class="
              bg-theme-1
              px-2
              py-4
              rounded-lg
              w-48
              text-theme-8
              hover:transform hover:scale-95
            "
            @click="clear()"
          >
            Clear
          </button>
           <button
            type="button"
            class="
              bg-theme-1
              px-2
              py-4
              rounded-lg
              w-48
              text-theme-8
              hover:transform hover:scale-95
            "
            @click="autoSend()"
          >
            autoSend
          </button>
        </div>
        <div class="mt-4 mb-4">
          {{contentHolder}}
          
        </div>
      </client-only>
    </div>
    <div
      v-else
      class="
        fixed
        top-0
        left-0
        right-0
        z-50
        w-full
        md:inset-0 md:h-full
        tran
        overflow-x-hidden
        flex
        justify-center
      "
    >
      <div class="justify-self-center px-4 flex flex-col justify-start gap-2">
        <h2>Вход в режим редактора</h2>
        <input class="w-48 text-black" type="text" v-model="name" />
        <input class="w-48 text-black" type="password" v-model="password" />
        <button
          type="button"
          class="border-2 rounded-lg bg-theme-1 text-black"
          @click="login()"
        >
          Login
        </button>
      </div>
    </div>

    <component :is="'style'">
      :root { --ck-custom-background: hsl(0, 0%, 12%); --ck-border-radius: 4px;
      --ck-color-base-foreground: var(--ck-custom-background);
      --ck-color-focus-border: hsl(208, 90%, 62%); --ck-color-text: hsl(0, 0%,
      98%); --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
      --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);
      --ck-color-input-background: var(--ck-custom-background);
      --ck-color-input-border: hsl(257, 3%, 43%); --ck-color-input-text:
      hsl(0,0%,12%); --ck-color-input-disabled-background: hsl(255, 4%, 21%);
      --ck-color-input-disabled-border: hsl(250, 3%, 38%);
      --ck-color-input-disabled-text: hsl(0,0%,12%);
      --ck-color-button-default-background: var(--ck-custom-background);
      --ck-color-button-default-hover-background: hsl(270, 1%, 22%);
      --ck-color-button-default-active-background: hsl(0,0%,12%);
      --ck-color-button-default-active-shadow: hsl(270, 2%, 23%);
      --ck-color-button-default-disabled-background:
      var(--ck-custom-background); --ck-color-dropdown-panel-background:
      var(--ck-custom-background); --ck-color-dropdown-panel-border:
      var(--ck-custom-foreground); }
    </component>
  </div>
</template>

<script>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import posts from '../post/post.js'


import shopApi from "~/api/shop";
@Component({
  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
  },
})
export default class Admin extends Vue {
  data() {
    return {
      editorConfig: {
        // plugins: [ GeneralHtmlSupport ],
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
            {
              model: "headingFancy",
              view: {
                name: "div",
                classes: "description",
              },
              title: "div (description)",
              class: "ck-heading_heading2_fancy",

              // It needs to be converted before the standard 'heading2'.
              converterPriority: "high",
            },
            {
              model: "headingFancy_1",
              view: {
                name: "div",
                classes: "body_sub",
              },
              title: "div (body_sub)",
              class: "ck-heading_heading2_fancy",

              // It needs to be converted before the standard 'heading2'.
              converterPriority: "high",
            },
            {
              model: "headingFancy_2",
              view: {
                name: "div",
                classes: "body_main",
              },
              title: "div (body_main)",
              class: "ck-heading_heading2_fancy",

              // It needs to be converted before the standard 'heading2'.
              converterPriority: "high",
            },
          ],
        },
      },
      contentHolder: "",
      category: "Захоронение",
      title: "",
      filter: "",
    };
  }
  @Watch("contentHolder")
  onContentHolderChanged(val, oldVal) {
    console.log(val);
  }

  verification = false;
  name = "";
  password = "";
  picterUrl = '';
  posts = posts;

  clear() {
    this.contentHolder = "";
  }

  async sendData() {
    if (this.contentHolder.length > 0) {
      return await shopApi
        .sendText({
          html: this.contentHolder,
          category: this.category,
          title: this.title,
          filter: this.filter,
          picterUrl: this.picterUrl,
        })
        .then((res) => {
          console.log(res);
          if (res?.code === 200) {
            //   this.clear();
            Vue.notify({
              type: "success",
              text: res.message,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          Vue.notify({
            type: "error",
            text: err.message,
          });
        });
    }
  }

  async autoSend() {

// console.log(this.posts);
    this.posts.forEach(async element => {
      console.log(element);
      await shopApi
        .sendText({
          html: element.html,
          category: element.category,
          title: element.title,
          filter: element.filter,
          picterUrl: element.picterUrl,
          meta: element.meta,
        })
        .then((res) => {
          console.log(res);
          if (res?.code === 200) {
            //   this.clear();
            Vue.notify({
              type: "success",
              text: res.message,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          Vue.notify({
            type: "error",
            text: err.message,
          });
        });
      
    });

  }

  async login() {
    if (this.name.length > 0 && this.password.length > 0) {
      await shopApi
        .login({ name: this.name, password: this.password })
        .then((res) => {
          console.log(res);
          if (
            res?.code === 200 &&
            res.hasOwnProperty("jwtToken") &&
            res.jwtToken.length > 0
          ) {
            window.localStorage.setItem("jwtToken", res.jwtToken);
            this.verification = true;
          }
        });
    }
  }

  async mounted() {
    //   setTimeout(() => {
    //     const editor = this.$refs.ckeditor;
    //    console.log(this.editor);

    //  this.editor.addButton('fileExplorer', locale => {
    //     const view = new ButtonView(locale);

    //     view.set({
    //       label: 'Choose a file',
    //       icon: uploadIcon,
    //       tooltip: true
    //     });

    //     // Callback executed once the icon is clicked
    //     view.on('execute', () => {
    //        // fire a JS event
    //        window.dispatchEvent(new Event('your-event-name'));
    //     });

    //     return view;
    //   });

    //   }, 2000);
    if (window.localStorage.getItem("jwtToken") !== null) {
      await shopApi
        .login({ jwtToken: window.localStorage.getItem("jwtToken") })
        .then((res) => {
          console.log(res);
          if (res?.code == 200) {
            this.verification = true;
          }
        });
    }
  }
}
</script>


<style scoped>
::v-deep .ck-content {
  color: black;
}
</style>