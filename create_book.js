const createBook = {
  template: `
    
    <form @submit.prevent="postData" method="post">
    <div class="form-group col-md-4">
    <label for="inputState">Author</label>
    <select  id="inputState" class="form-control" v-model="posts.author">
      <option v-for="aut in authors" :key=aut.id>{{ aut.first_name +" " + aut.last_name }}</option>
    </select>
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput">Name</label>
      <input type="text" class="form-control" name="Name" placeholder="Name" v-model="posts.name">
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Isbn</label>
      <input type="text" class="form-control" id="Isbn" placeholder="Isbn" v-model="posts.isbn">
    </div>

    <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Create Book</button>
    </div>
    </div>

  </form>
    
    
    `,

  data() {
    return {
      posts: {
        author: {
          name: "",
          isbn: "",
        },
      },
      authors: [],
    };
  },

  methods: {
    async postData() {
      const submitData = JSON.stringify(this.posts);
      await axios
        .post(variables.API_URL + "book", JSON.parse(submitData), {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    refreshData() {
      axios
        .get(variables.API_URL + "author")
        .then((response) => {
          console.log(response);
          this.authors = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  async mounted() {
    const data = this.postData();
    console.log(data);
  },
  mounted() {
    this.refreshData();
  },
};
