const bookUpdate = {
  template: `
    
    <form @submit.prevent="postData" method="post">
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
      <button type="submit" class="btn btn-primary">Create</button>
    </div>
    </div>
  </form>
    
    
    `,

  data() {
    return {
      posts: {
        first_name: "",
        last_name: "",
        author: "",
      },
    };
  },

  methods: {
    async updateData() {
      result = await axios
        .put(variables.API_URL + "book/" + this.$route.params.id, {
          first_name: this.posts.first_name,
          last_name: this.posts.last_name,
          author: this.posts.author,
        })
        .then((response) => {
          console.log(response);
          this.posts = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
      //   if (result.status == 200) {
      //     this.$router.push({ name: "Home" });
      //   }
    },
    async getData() {
      const result = await axios.get(
        variables.API_URL + "book/" + this.$route.params.id
      );
      console.warn(result);
    },
  },

  mounted: function () {
    this.updateData();
    this.getData();
  },
};
