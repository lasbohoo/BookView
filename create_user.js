const createUser = {
  template: `
  
  <form @submit.prevent="postData" method="post">
  <div class="form-group">
    <label for="formGroupExampleInput">First Name</label>
    <input type="text" class="form-control" name="FirstName" placeholder="First Name" v-model="posts.first_name">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Last Name</label>
    <input type="text" class="form-control" id="LastName" placeholder="Last Name" v-model="posts.last_name">
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
      },
    };
  },

  methods: {
    async postData() {
      await axios
        .post(variables.API_URL + "author", this.posts)
        .then((response) => {
          console.log(response);
          this.posts = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted: function () {
    this.postData();
  },
};
