<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <router-view
        @add-book-list="addBook"/>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/global/Header';
import Footer from '@/global/Footer';
const STORAGE_KEY = 'books'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data(){
    return {
      books: [],
      newBook: null
    }
  },
  //ローカルストレージの処理
  mounted() {
    if (localStorage.getItem(STORAGE_KEY)) { //ローカルストレージを取得
      try {
        //ローカルストレージを保存
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
      } catch(e) {
          //ローカルストレージを削除
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  },
  methods: {
    addBook(e) {
      this.books.push({
        id: this.books.length,
        title: e.title,
        image: e.image,
        description: e.description,
        readDate: '',
        memo: ''
      });
      this.saveBooks()
      // 最後に追加したidの取得コード
      // console.log(this.books.slice(-1)[0].id)
      this.goToEditPage(this.books.slice(-1)[0].id)
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      localStorage.setItem(STORAGE_KEY, parsed);
    }
  }
  };
</script>
