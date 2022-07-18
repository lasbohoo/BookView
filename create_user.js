const createUser = {
  template: `
  
  <div class="alert alert-success" v-if="isSuccess">Post Created Successfully</div>
  <form @submit.prevent="postData" >
  <div class="form-group">
    <label for="formGroupExampleInput">First Name</label>
    <input type="text" class="form-control" name="FirstName" placeholder="First Name" v-model="first_name">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Last Name</label>
    <input type="text" class="form-control" id="LastName" placeholder="Last Name" v-model="last_name">
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
      first_name: "",
      last_name: "",
      isSuccess: false,
    };
  },

  methods: {
    postData() {
      axios
        .post(variables.API_URL + "author", {
          first_name: this.first_name,
          last_name: this.last_name,
        })
        .then((response) => {
          this.isSuccess = true;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  async mounted() {
    await this.postData();
  },
};
